export class TextResume {
    country: string;
    total_cases: string;
    total_deaths: string;
    total_recovered: string;
    total_cases_today: string;
    total_deaths_today: string;
    total_serious_cases: string;
    total_active_cases: string;
    total_danger_rank: string;
    language: string;

    constructor() {
        this.country = 'País:';
        this.total_cases = 'Número de casos:';
        this.total_deaths = 'Número de mortes:';
        this.total_recovered = 'Número de pessoas curadas:';
        this.total_cases_today = 'Número de casos hoje:';
        this.total_deaths_today = 'Número de mortes hoje:';
        this.total_serious_cases = 'Número de casos graves:';
        this.total_active_cases = 'Número de casos ativos:';
        this.total_danger_rank = 'Posição no ranking de perigo:';
        this.language = 'br';
    }
}