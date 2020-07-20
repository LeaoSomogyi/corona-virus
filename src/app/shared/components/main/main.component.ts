import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { StorageService } from '@services/local-storage.service'
import { TextService } from '@services/text.service'
import { CountryService } from '@services/country.service';
import { TextMain } from '@shared/models/text-main.model';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

    country: string;
    selectedCountry: TextMain;
    availableCountries: Array<TextMain>;

    constructor(
        private _storageService: StorageService,
        private _countryService: CountryService,
        private _textService: TextService) {
    }

    ngOnInit(): void {
        this.init();
    }

    public init(): void {
        this.availableCountries = this._textService.getMain();

        let country = this._countryService.getLanguage();
        if (country) {
            this.country = country;
            this.selectedCountry = this.availableCountries.find(x => x.language == country);
        } else {
            this.selectedCountry = this.availableCountries[0];
        }
    }

    public setCountry(country: string): void {
        this._storageService.removeAll();
        this._countryService.setLanguage(country);
        this.selectedCountry = this.availableCountries.find(x => x.language == country);
    }
}