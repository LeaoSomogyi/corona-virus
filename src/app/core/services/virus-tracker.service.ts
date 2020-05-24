import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryTotal } from 'src/app/shared/models/country-total.model';
import { environment } from 'src/environments/environment';
import { CountryTimeline } from 'src/app/shared/models/country-timeline.model';
import { GlobalResume } from 'src/app/shared/models/global-resume.model';

@Injectable()
export class VirusTrackerService {

    constructor(private _httpClient: HttpClient) { }

    public getCountryTotal(countryCode: string): Observable<CountryTotal> {
        return this._httpClient.get<CountryTotal>(`${environment.apiUrl}countryTotal=${countryCode}`);
    }

    public getCountryTimeline(countryCode: string): Observable<CountryTimeline> {
        return this._httpClient.get<CountryTimeline>(`${environment.apiUrl}countryTimeline=${countryCode}`);
    }

    public getGlobalResume(): Observable<GlobalResume> {
        return this._httpClient.get<GlobalResume>(`${environment.apiUrl}global=stats`);
    }
}