import { OnInit, Input, Component } from '@angular/core';
import { CountryNews } from 'src/app/shared/models/country-news.model';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css'],
    providers: []
})
export class NewsComponent implements OnInit {
    isLoaded: boolean;
    skip: number = 1;
    top: number = 30;
    totalPages: number;
    paginatedNews: Array<CountryNews>;

    @Input()
    countryNews: Array<CountryNews>;

    constructor() {
        this.isLoaded = false;
    }

    ngOnInit(): void {
        this.paginate();

        this.isLoaded = true;
    }

    filterNews(pageNumber: number) {
        this.skip = pageNumber;
        this.paginate();
    }

    setNews(news: Array<CountryNews>) {
        this.countryNews = news;

        this.paginate();
    }

    paginate() { 
        let keys = this.countryNews.map(n => Object.keys(n).filter(k => k !== 'stat'))[0].reverse();
        let start = (this.skip - 1) * this.top;
        let end = this.top * this.skip;

        this.totalPages = keys.length;
        this.paginatedNews = this.countryNews.map(c => keys.map(k => c[k]))[0].slice(start, end);
    }
}