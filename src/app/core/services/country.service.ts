import { Injectable } from '@angular/core';
import { SelectItem } from '@models/select-item.model';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '@services/local-storage.service';
import { AppConstants } from '@shared/constants/app-constants';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    private readonly configUrl = 'assets/config/';
    public readonly languageChanged: Observable<string>;
    private _languageChanged: BehaviorSubject<string>;

    constructor(
        private http: HttpClient,
        private storageService: StorageService) {
        this._languageChanged = new BehaviorSubject('');
        this.languageChanged = this._languageChanged.asObservable();
    }

    public async getAllCountries(language: string): Promise<Array<SelectItem>> {
        return await this.http.get<Array<SelectItem>>(`${this.configUrl}countries.${language}.json`).toPromise();
    }

    public setLanguage(language: string): void {
        this.storageService.set(AppConstants.Keys.Country, language);
        this._languageChanged.next(language);
    }

    public getLanguage(): string {
        let language = this.storageService.get(AppConstants.Keys.Country);

        if (!language) {
            this.setLanguage(language);
        }

        return language || 'br';
    }
}