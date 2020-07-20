import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { SelectItem } from '@models/select-item.model';
import { CountryService } from '@services/country.service';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { ResumeComponent } from '@components/resume/resume.component';
import { GlobalResume } from '@models/global-resume.model';
import { VirusTrackerService } from '@services/virus-tracker.service';
import { StorageService } from '@services/local-storage.service';
import { AppConstants } from '@shared/constants/app-constants';
import { Subscription } from 'rxjs';
import { TextHome } from '@shared/models/text-home.model';
import { TextService } from '@services/text.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: []
})
export class HomeComponent implements OnInit, OnDestroy {
    @ViewChild(DashboardComponent) dashboard: DashboardComponent;
    @ViewChild(ResumeComponent) resume: ResumeComponent;

    public countries: Array<SelectItem>;
    public selectedCountry: string;
    public globalResume: GlobalResume;
    public isLoaded: boolean;
    public languageChanged: Subscription;
    public selectedTextHome: TextHome;
    public textHomes: Array<TextHome>;

    constructor(
        private _countryService: CountryService,
        private _virusTrackerService: VirusTrackerService,
        private _storageService: StorageService,
        private _textService: TextService) {

        this.languageChanged = this._countryService.languageChanged.subscribe({
            next: (newValue: string) => {
                if (newValue) {
                    this.loadContries(newValue);
                    this.selectedTextHome = this.textHomes.find(x => x.language == newValue);
                }
            }
        });
    }

    ngOnInit(): void {
        this.init();
    }

    ngOnDestroy(): void {
        this.languageChanged.unsubscribe();
    }

    public init(): void {
        let country = this._countryService.getLanguage();
        let countries = this._storageService.get(AppConstants.Keys.Countries);
        this.textHomes = this._textService.getHome();
        this.selectedTextHome = this.textHomes.find(x => x.language == country);

        if (!countries) {
            this.loadContries(country);
        } else {
            this.countries = countries;
        }

        this.loadGlobalStats();
    }

    public loadContries(country: string): void {
        this._countryService.getAllCountries(country || 'br').then((data: Array<SelectItem>) => {
            this.countries = data;
            this.setCountriesOnStorage(data);
        });
    }

    public loadGlobalStats(): void {
        this._virusTrackerService.getGlobalResume().subscribe((data: GlobalResume) => {
            this.globalResume = data;
            this.isLoaded = true;
        });
    }

    public reload(): void {
        if (this.selectedCountry && this.dashboard && this.resume) {
            this.dashboard.loadData(this.selectedCountry);
            this.resume.loadData(this.selectedCountry);
        }
    }

    public setCountriesOnStorage(countries: Array<SelectItem>): void {
        this._storageService.set(AppConstants.Keys.Countries, countries);
    }
}