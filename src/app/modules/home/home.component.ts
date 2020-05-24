import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'src/app/shared/models/select-item.model';
import { CountryService } from 'src/app/core/services/country.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ResumeComponent } from '../resume/resume.component';
import { GlobalResume } from 'src/app/shared/models/global-resume.model';
import { VirusTrackerService } from 'src/app/core/services/virus-tracker.service';

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

    public countries: Array<SelectItem>;
    public selectedCountry: string;
    public globalResume: GlobalResume;
    public isLoaded: boolean;

    constructor(
        private _countryService: CountryService,
        private _virusTrackerService: VirusTrackerService) { }

    ngOnInit(): void {
        this.countries = this._countryService.getAllCountries();
        this.loadGlobalStats();
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
}