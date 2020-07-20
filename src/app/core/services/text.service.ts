import { Injectable } from '@angular/core';
import { TextMain } from '@shared/models/text-main.model';
import { TextHome } from '@shared/models/text-home.model'
import { TextResume } from '@shared/models/text-resume.model'
import { TextDashboard } from '@shared/models/text-dashboard.model'

@Injectable({
    providedIn: 'root'
})
export class TextService {

    constructor() { }

    public getMain(): Array<TextMain> {
        let list = new Array<TextMain>();
        list.push(new TextMain());

        let en = new TextMain();
        en.about = 'About';
        en.back = 'Back to top';
        en.contact = 'Contact';
        en.description = 'Just a website made in Angular 9 and Bootstrap to show the evolution of the new disease that plagues the world. In addition to practicing the language, it is a way to keep the population informed and aware of the seriousness of the situation. <br> For more information about the virus, visit the <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">OMS</a> oficial website. ';
        en.doc = 'Developers Doc';
        en.h1 = 'Statistics of new COVID-19';
        en.language = 'en';
        en.linkedin = 'Connect on LinkedIn';
        en.main_description = 'This website aims to show data on the new disease around the globe. All data displayed is made available by <a href="https://thevirustracker.com/api" target="_blank"> Virus Tracker API </a>';
        en.twitter = 'Follow on Twitter';
        list.push(en);

        return list;
    }

    public getHome(): Array<TextHome> {
        let list = new Array<TextHome>();
        list.push(new TextHome());

        let textHome = new TextHome();
        textHome.global_stats = 'Global Statistics';
        textHome.total_cases = 'Number of cases:';
        textHome.total_deaths = 'Number of deaths:';
        textHome.total_recovered = 'Number of people healed:';
        textHome.total_unresolved = 'Number of unresolved cases:';
        textHome.total_active = 'Number of active cases:';
        textHome.total_countries = 'Number of countries affected:';
        textHome.total_cases_today = 'Number of cases today:';
        textHome.total_deaths_today = 'Number of deaths today:';
        textHome.total_serious_cases = 'Number of serious cases:';
        textHome.available_countries = 'Available countries';
        textHome.select_country_message = 'Select a country:';
        textHome.language = 'en';
        list.push(textHome);

        return list;
    }

    public getResume(): Array<TextResume> {
        let list = new Array<TextResume>();
        list.push(new TextResume());

        let textResume = new TextResume();
        textResume.country = 'Country:';
        textResume.total_cases = 'Number of cases:';
        textResume.total_deaths = 'Number of deaths:';
        textResume.total_recovered = 'Number of people healed:';
        textResume.total_cases_today = 'Number of cases today:';
        textResume.total_deaths_today = 'Number of deaths today:';
        textResume.total_serious_cases = 'Number of serious cases:';
        textResume.total_active_cases = 'Number of active cases:';
        textResume.total_danger_rank = 'Danger Ranking Position:';
        textResume.language = 'en';
        list.push(textResume);

        return list;
    }

    public getDashboard(): Array<TextDashboard> {
        let list = new Array<TextDashboard>();
        list.push(new TextDashboard());

        let textDashboard = new TextDashboard();
        textDashboard.growth_message = 'Day-to-Day growth';
        textDashboard.day_5 = '5 days';
        textDashboard.day_15 = '15 days';
        textDashboard.day_30 = '30 days';
        textDashboard.all = 'Everything';
        textDashboard.total_cases_today = 'New cases today';
        textDashboard.total_deaths_today = 'New deaths today';
        textDashboard.total_cases = 'Number of cases';
        textDashboard.total_recovered = 'Number of people healed';
        textDashboard.total_deaths = 'Number of deaths'
        textDashboard.language = 'en';
        textDashboard.date_format = 'dd/MM/yyyy'
        list.push(textDashboard);

        return list;
    }
}