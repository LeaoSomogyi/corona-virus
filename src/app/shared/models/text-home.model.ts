export class TextHome {
    global_stats: string;
    total_cases: string;
    total_deaths: string;
    total_recovered: string;
    total_unresolved: string;
    total_active: string;
    total_countries: string;
    total_cases_today: string;
    total_deaths_today: string;
    total_serious_cases: string;
    available_countries: string;
    select_country_message: string;
    language: string;

    constructor() {
        this.global_stats = 'Estatísticas Globais';
        this.total_cases = 'Número de casos:';
        this.total_deaths = 'Número de mortes:';
        this.total_recovered = 'Número de pessoas curadas:';
        this.total_unresolved = 'Número de casos não resolvidos:';
        this.total_active = 'Número de casos ativos:';
        this.total_countries = 'Número de países afetados:';
        this.total_cases_today = 'Número de casos hoje:';
        this.total_deaths_today = 'Número de mortes hoje:';
        this.total_serious_cases = 'Número de casos graves:';
        this.available_countries = 'Países disponíveis';
        this.select_country_message = 'Selecione um país:';
        this.language = 'br';
    }
}