import { Component, OnInit, Input } from '@angular/core';
import { VirusTrackerService } from 'src/app/core/services/virus-tracker.service';
import { CountryTotal } from 'src/app/shared/models/country-total.model';

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

    constructor(private _virusService: VirusTrackerService) { 
        this.isLoaded = false;
    }

    ngOnInit(): void {
        this._virusService.getCountryTotal(this.countryCode).subscribe((data: CountryTotal) => {
            this.countryTotal = data;
            this.isLoaded = true;
        });
    }
}