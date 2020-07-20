import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts'
import { VirusTrackerService } from '@services/virus-tracker.service';
import { CountryTimeline } from '@models/country-timeline.model';
import { AlertService } from '@services/alert.service';
import { DatePipe } from '@angular/common';
import { TextService } from '@services/text.service';
import { CountryService } from '@services/country.service';
import { TextDashboard } from '@shared/models/text-dashboard.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [
        VirusTrackerService
    ]
})
export class DashboardComponent implements OnInit {

    @Input()
    public countryCode: string;

    public isLoaded: boolean;
    public barChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: false
                }
            }], yAxes: [{
                gridLines: {
                    offsetGridLines: false
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            labels: {
                fontColor: '#5E5E5E',
                fontSize: 11,
                fontFamily: 'Segoe UI, sans-serif'
            },
            position: 'bottom'
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'end',
            }
        }
    };
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [];
    public barChartLabels: Label[];
    public barChartData: ChartDataSets[];

    private allDays: string[];
    private allNewCases: number[];
    private allNewDeaths: number[];
    private allTotalCases: number[];
    private allTotalRecoveries: number[];
    private allTotalDeaths: number[];

    public selectedText: TextDashboard;
    public textDashboards: Array<TextDashboard>;
    public languageChanged: Subscription;

    constructor(
        private _virusService: VirusTrackerService,
        private _alertService: AlertService,
        private _datepipe: DatePipe,
        private _textService: TextService,
        private _countryService: CountryService) {
        this.isLoaded = false;

        this.languageChanged = this._countryService.languageChanged.subscribe({
            next: (newValue: string) => {
                if (newValue) {
                    this.selectedText = this.textDashboards.find(x => x.language == newValue);
                    this.setChartData('5');
                }
            }
        });
    }

    ngOnInit(): void {
        let language = this._countryService.getLanguage();
        this.textDashboards = this._textService.getDashboard();
        this.selectedText = this.textDashboards.find(x => x.language == language);

        this.loadData(this.countryCode);
    }

    public loadData(countryCode: string): void {
        this._virusService.getCountryTimeline(countryCode).subscribe((data: CountryTimeline) => {
            this.allDays = data.timelineitems.map(t => Object.keys(t).filter(k => k !== 'stat'))[0];
            this.allNewCases = data.timelineitems.map(t => this.allDays.map(d => t[d].new_daily_cases))[0];
            this.allNewDeaths = data.timelineitems.map(t => this.allDays.map(d => t[d].new_daily_deaths))[0];
            this.allTotalCases = data.timelineitems.map(t => this.allDays.map(d => t[d].total_cases))[0];
            this.allTotalRecoveries = data.timelineitems.map(t => this.allDays.map(d => t[d].total_recoveries))[0];
            this.allTotalDeaths = data.timelineitems.map(t => this.allDays.map(d => t[d].total_deaths))[0];

            let days = [...this.allDays.map(date => this._datepipe.transform(date, this.selectedText.date_format))].reverse().slice(0, 5).reverse();
            this.barChartLabels = [...days];
            this.barChartData = [
                {
                    data: [...this.allNewCases].reverse().slice(0, 5).reverse(),
                    label: this.selectedText.total_cases_today
                },
                {
                    data: [...this.allNewDeaths].reverse().slice(0, 5).reverse(),
                    label: this.selectedText.total_deaths_today
                },
                {
                    data: [...this.allTotalCases].reverse().slice(0, 5).reverse(),
                    label: this.selectedText.total_cases
                },
                {
                    data: [...this.allTotalRecoveries].reverse().slice(0, 5).reverse(),
                    label: this.selectedText.total_recovered
                },
                {
                    data: [...this.allTotalDeaths].reverse().slice(0, 5).reverse(),
                    label: this.selectedText.total_deaths
                }
            ];

            this.isLoaded = true;
        }, () => {
            this._alertService.showError('Ops! Tivemos problemas ao obter os dados para o dashboard =/');
        });
    }

    public setChartData(period: string): void {
        switch (period) {
            case '5':
                this.barChartLabels = [...this.allDays.map(date => this._datepipe.transform(date, this.selectedText.date_format))].reverse().slice(0, 5).reverse();
                this.barChartData = [
                    {
                        data: [...this.allNewCases].reverse().slice(0, 5).reverse(),
                        label: this.selectedText.total_cases_today
                    },
                    {
                        data: [...this.allNewDeaths].reverse().slice(0, 5).reverse(),
                        label: this.selectedText.total_deaths_today
                    },
                    {
                        data: [...this.allTotalCases].reverse().slice(0, 5).reverse(),
                        label: this.selectedText.total_cases
                    },
                    {
                        data: [...this.allTotalRecoveries].reverse().slice(0, 5).reverse(),
                        label: this.selectedText.total_recovered
                    },
                    {
                        data: [...this.allTotalDeaths].reverse().slice(0, 5).reverse(),
                        label: this.selectedText.total_deaths
                    }
                ];
                break;
            case '15':
                this.barChartLabels = [...this.allDays.map(date => this._datepipe.transform(date, this.selectedText.date_format))].reverse().slice(0, 15).reverse();
                this.barChartData = [
                    {
                        data: [...this.allNewCases].reverse().slice(0, 15).reverse(),
                        label: this.selectedText.total_cases_today
                    },
                    {
                        data: [...this.allNewDeaths].reverse().slice(0, 15).reverse(),
                        label: this.selectedText.total_deaths_today
                    },
                    {
                        data: [...this.allTotalCases].reverse().slice(0, 15).reverse(),
                        label: this.selectedText.total_cases
                    },
                    {
                        data: [...this.allTotalRecoveries].reverse().slice(0, 15).reverse(),
                        label: this.selectedText.total_recovered
                    },
                    {
                        data: [...this.allTotalDeaths].reverse().slice(0, 15).reverse(),
                        label: this.selectedText.total_deaths
                    }
                ];

                break;
            case '30':
                this.barChartLabels = [...this.allDays.map(date => this._datepipe.transform(date, this.selectedText.date_format))].reverse().slice(0, 30).reverse();
                this.barChartData = [
                    {
                        data: [...this.allNewCases].reverse().slice(0, 30).reverse(),
                        label: this.selectedText.total_cases_today
                    },
                    {
                        data: [...this.allNewDeaths].reverse().slice(0, 30).reverse(),
                        label: this.selectedText.total_deaths_today
                    },
                    {
                        data: [...this.allTotalCases].reverse().slice(0, 30).reverse(),
                        label: this.selectedText.total_cases
                    },
                    {
                        data: [...this.allTotalRecoveries].reverse().slice(0, 30).reverse(),
                        label: this.selectedText.total_recovered
                    },
                    {
                        data: [...this.allTotalDeaths].reverse().slice(0, 30).reverse(),
                        label: this.selectedText.total_deaths
                    }
                ];

                break;
            default:
                this.barChartLabels = [...this.allDays.map(date => this._datepipe.transform(date, this.selectedText.date_format))];
                this.barChartData = [
                    {
                        data: [...this.allNewCases],
                        label: this.selectedText.total_cases_today
                    },
                    {
                        data: [...this.allNewDeaths],
                        label: this.selectedText.total_deaths_today
                    },
                    {
                        data: [...this.allTotalCases],
                        label: this.selectedText.total_cases
                    },
                    {
                        data: [...this.allTotalRecoveries],
                        label: this.selectedText.total_recovered
                    },
                    {
                        data: [...this.allTotalDeaths],
                        label: this.selectedText.total_deaths
                    }
                ];

                break;
        }
    }
}