import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'src/app/shared/models/select-item.model';
import { CountryService } from 'src/app/core/services/country.service';
import { CountryNews } from 'src/app/shared/models/country-news.model';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ResumeComponent } from '../resume/resume.component';
import { NewsComponent } from '../news/news.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [
        CountryService
    ]
})
export class HomeComponent implements OnInit {
    @ViewChild(DashboardComponent) dashboard: DashboardComponent;
    @ViewChild(ResumeComponent) resume: ResumeComponent;
    @ViewChild(NewsComponent) news: NewsComponent;

    countries: Array<SelectItem>;
    selectedCountry: string;
    countryNews: Array<CountryNews>;
    firstNewsLoad: boolean;

    constructor(private _countryService: CountryService) { }

    ngOnInit(): void {
        this.countries = this._countryService.getAllCountries();
        this.firstNewsLoad = true;
    }

    receiver(event) {
        this.countryNews = event;

        if (!this.firstNewsLoad && this.news) {
            this.news.setNews(this.countryNews);
        }
    }

    reload() {
        if (this.selectedCountry && this.dashboard && this.resume) {
            this.dashboard.loadData(this.selectedCountry);
            this.resume.loadData(this.selectedCountry);
            this.firstNewsLoad = false;
        }
    }
}