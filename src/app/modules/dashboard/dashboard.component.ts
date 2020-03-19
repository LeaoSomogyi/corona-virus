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

    constructor(private _virusService: VirusTrackerService,
        private _alertService: AlertService) {
        this.isLoaded = false;
    }

    ngOnInit(): void {
        this.loadData(this.countryCode);
    }

    loadData(countryCode: string) {
        this._virusService.getCountryTimeline(countryCode).subscribe((data: CountryTimeline) => {
            let days = data.timelineitems.map(t => Object.keys(t).filter(k => k !== 'stat'))[0];
            this.barChartLabels = days;
            this.barChartData = [
                {
                    data: data.timelineitems.map(t => days.map(d => t[d].new_daily_cases))[0],
                    label: 'Novos casos hoje'
                },
                {
                    data: data.timelineitems.map(t => days.map(d => t[d].new_daily_deaths))[0],
                    label: 'Novas mortes hoje'
                },
                {
                    data: data.timelineitems.map(t => days.map(d => t[d].total_cases))[0],
                    label: 'Total de casos'
                },
                {
                    data: data.timelineitems.map(t => days.map(d => t[d].total_recoveries))[0],
                    label: 'Total de pessoas curadas'
                },
                {
                    data: data.timelineitems.map(t => days.map(d => t[d].total_deaths))[0],
                    label: 'Total de mortes'
                }
            ];

            this.isLoaded = true;
        }, () => {
            this._alertService.showError('Ops! Tivemos problemas ao obter os dados para o dashboard =/');
        });
    }
}