import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VirusTrackerService } from 'src/app/core/services/virus-tracker.service';
import { CountryTotal } from 'src/app/shared/models/country-total.model';
import { CountryNews } from 'src/app/shared/models/country-news.model';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
    providers: []
})
export class ResumeComponent implements OnInit {
    isLoaded: boolean;
    countryTotal: CountryTotal;

    @Input()
    countryCode: string;

    @Output()
    countryNews = new EventEmitter();

    constructor(private _virusService: VirusTrackerService,
        private _alertService: AlertService) {
        this.isLoaded = false;
    }

    ngOnInit(): void {
        this.loadData(this.countryCode);
    }

    loadData(countryCode: string) {
        this._virusService.getCountryTotal(countryCode).subscribe((data: CountryTotal) => {
            this.countryTotal = data;
            this.isLoaded = true;
            this.emit(this.countryTotal.countrynewsitems);
        }, () => {
            this._alertService.showError('Ops! Tivemos problemas ao obter os dados do resumo =/');
        });
    }

    emit(news: Array<CountryNews>) {
        this.countryNews.emit(news);
    }
}