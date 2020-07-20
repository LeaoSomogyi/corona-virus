export class TextDashboard {
    growth_message: string;
    day_5: string;
    day_15: string;
    day_30: string;
    all: string;
    total_cases_today: string;
    total_deaths_today: string;
    total_cases: string;
    total_recovered: string;
    total_deaths: string;
    language: string;
    date_format: string;

    constructor() {
        this.growth_message = 'Crescimento dia a dia';
        this.day_5 = '5 dias';
        this.day_15 = '15 dias';
        this.day_30 = '30 dias';
        this.all = 'Tudo';
        this.total_cases_today = 'Novos casos hoje';
        this.total_deaths_today = 'Novas mortes hoje';
        this.total_cases = 'Total de casos';
        this.total_recovered = 'Total de pessoas curadas';
        this.total_deaths = 'Total de mortes'
        this.language = 'br';
        this.date_format = 'dd/MM/yyyy'
    }
}