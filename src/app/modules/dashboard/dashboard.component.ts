import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts'
import { VirusTrackerService } from 'src/app/core/services/virus-tracker.service';
import { CountryTimeline } from 'src/app/shared/models/country-timeline.model';
import { AlertService } from 'src/app/core/services/alert.service';

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
    countryCode: string;

    isLoaded: boolean;
    barChartOptions: ChartOptions = {
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

    barChartType: ChartType = 'bar';
    barChartLegend = true;
    barChartPlugins = [];
    barChartLabels: Label[];
    barChartData: ChartDataSets[];
    allDays: string[];
    allNewCases: number[];
    allNewDeaths: number[];
    allTotalCases: number[];
    allTotalRecoveries: number[];
    allTotalDeaths: number[];

    constructor(private _virusService: VirusTrackerService,
        private _alertService: AlertService) {
        this.isLoaded = false;
    }

    ngOnInit(): void {
        this.loadData(this.countryCode);
    }

    loadData(countryCode: string) {
        this._virusService.getCountryTimeline(countryCode).subscribe((data: CountryTimeline) => {
            this.allDays = data.timelineitems.map(t => Object.keys(t).filter(k => k !== 'stat'))[0];
            this.allNewCases = data.timelineitems.map(t => this.allDays.map(d => t[d].new_daily_cases))[0];
            this.allNewDeaths = data.timelineitems.map(t => this.allDays.map(d => t[d].new_daily_deaths))[0];
            this.allTotalCases = data.timelineitems.map(t => this.allDays.map(d => t[d].total_cases))[0];
            this.allTotalRecoveries = data.timelineitems.map(t => this.allDays.map(d => t[d].total_recoveries))[0];
            this.allTotalDeaths = data.timelineitems.map(t => this.allDays.map(d => t[d].total_deaths))[0];

            let days = [...this.allDays].reverse().slice(0, 5).reverse();
            this.barChartLabels = [...days];
            this.barChartData = [
                {
                    data: [...this.allNewCases].reverse().slice(0, 5).reverse(),
                    label: 'Novos casos hoje'
                },
                {
                    data: [...this.allNewDeaths].reverse().slice(0, 5).reverse(),
                    label: 'Novas mortes hoje'
                },
                {
                    data: [...this.allTotalCases].reverse().slice(0, 5).reverse(),
                    label: 'Total de casos'
                },
                {
                    data: [...this.allTotalRecoveries].reverse().slice(0, 5).reverse(),
                    label: 'Total de pessoas curadas'
                },
                {
                    data: [...this.allTotalDeaths].reverse().slice(0, 5).reverse(),
                    label: 'Total de mortes'
                }
            ];

            this.isLoaded = true;
        }, () => {
            this._alertService.showError('Ops! Tivemos problemas ao obter os dados para o dashboard =/');
        });
    }

    setChartData(period: string) {
        switch (period) {
            case '5':
                this.barChartLabels = [...this.allDays].reverse().slice(0, 5).reverse();
                this.barChartData = [
                    {
                        data: [...this.allNewCases].reverse().slice(0, 5).reverse(),
                        label: 'Novos casos hoje'
                    },
                    {
                        data: [...this.allNewDeaths].reverse().slice(0, 5).reverse(),
                        label: 'Novas mortes hoje'
                    },
                    {
                        data: [...this.allTotalCases].reverse().slice(0, 5).reverse(),
                        label: 'Total de casos'
                    },
                    {
                        data: [...this.allTotalRecoveries].reverse().slice(0, 5).reverse(),
                        label: 'Total de pessoas curadas'
                    },
                    {
                        data: [...this.allTotalDeaths].reverse().slice(0, 5).reverse(),
                        label: 'Total de mortes'
                    }
                ];
                break;
            case '15':
                this.barChartLabels = [...this.allDays].reverse().slice(0, 15).reverse();
                this.barChartData = [
                    {
                        data: [...this.allNewCases].reverse().slice(0, 15).reverse(),
                        label: 'Novos casos hoje'
                    },
                    {
                        data: [...this.allNewDeaths].reverse().slice(0, 15).reverse(),
                        label: 'Novas mortes hoje'
                    },
                    {
                        data: [...this.allTotalCases].reverse().slice(0, 15).reverse(),
                        label: 'Total de casos'
                    },
                    {
                        data: [...this.allTotalRecoveries].reverse().slice(0, 15).reverse(),
                        label: 'Total de pessoas curadas'
                    },
                    {
                        data: [...this.allTotalDeaths].reverse().slice(0, 15).reverse(),
                        label: 'Total de mortes'
                    }
                ];

                break;
            case '30':
                this.barChartLabels = [...this.allDays].reverse().slice(0, 30).reverse();
                this.barChartData = [
                    {
                        data: [...this.allNewCases].reverse().slice(0, 30).reverse(),
                        label: 'Novos casos hoje'
                    },
                    {
                        data: [...this.allNewDeaths].reverse().slice(0, 30).reverse(),
                        label: 'Novas mortes hoje'
                    },
                    {
                        data: [...this.allTotalCases].reverse().slice(0, 30).reverse(),
                        label: 'Total de casos'
                    },
                    {
                        data: [...this.allTotalRecoveries].reverse().slice(0, 30).reverse(),
                        label: 'Total de pessoas curadas'
                    },
                    {
                        data: [...this.allTotalDeaths].reverse().slice(0, 30).reverse(),
                        label: 'Total de mortes'
                    }
                ];

                break;
            default:
                this.barChartLabels = [...this.allDays];
                this.barChartData = [
                    {
                        data: [...this.allNewCases],
                        label: 'Novos casos hoje'
                    },
                    {
                        data: [...this.allNewDeaths],
                        label: 'Novas mortes hoje'
                    },
                    {
                        data: [...this.allTotalCases],
                        label: 'Total de casos'
                    },
                    {
                        data: [...this.allTotalRecoveries],
                        label: 'Total de pessoas curadas'
                    },
                    {
                        data: [...this.allTotalDeaths],
                        label: 'Total de mortes'
                    }
                ];

                break;
        }
    }
}