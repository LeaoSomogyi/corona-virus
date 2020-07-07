import { CountryInfo } from '@models/country-info.model';

export class CountryData {
    info: CountryInfo;
    total_cases: number;
    total_recovered: number;
    total_unresolved: number;
    total_deaths: number;
    total_new_cases_today: number;
    total_new_deaths_today: number;
    total_active_cases: number;
    total_serious_cases: number;
    total_danger_rank: number;
}