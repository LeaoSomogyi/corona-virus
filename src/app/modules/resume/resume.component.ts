import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VirusTrackerService } from 'src/app/core/services/virus-tracker.service';
import { CountryTotal } from 'src/app/shared/models/country-total.model';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
    providers: []
})
export class ResumeComponent implements OnInit {
    public isLoaded: boolean;
    public countryTotal: CountryTotal;

    @Input()
    public countryCode: string;

    constructor(private _virusService: VirusTrackerService,
        private _alertService: AlertService) {
        this.isLoaded = false;
    }

    public ngOnInit(): void {
        this.loadData(this.countryCode);
    }

    public loadData(countryCode: string): void {
        this._virusService.getCountryTotal(countryCode).subscribe((data: CountryTotal) => {
            this.countryTotal = data;
            this.isLoaded = true;
        }, () => {
            this._alertService.showError('Ops! Tivemos problemas ao obter os dados do resumo =/');
        });
    }
}