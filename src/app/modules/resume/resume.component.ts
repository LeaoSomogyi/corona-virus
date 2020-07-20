import { Component, OnInit, Input } from '@angular/core';
import { VirusTrackerService } from '@services/virus-tracker.service';
import { CountryTotal } from '@models/country-total.model';
import { AlertService } from '@services/alert.service';
import { TextResume } from '@shared/models/text-resume.model';
import { TextService } from '@services/text.service';
import { CountryService } from '@services/country.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
    providers: []
})
export class ResumeComponent implements OnInit {
    public isLoaded: boolean;
    public countryTotal: CountryTotal;
    public selectedText: TextResume;
    public textResumes: Array<TextResume>;
    public languageChanged: Subscription;

    @Input()
    public countryCode: string;

    constructor(
        private _virusService: VirusTrackerService,
        private _alertService: AlertService,
        private _textService: TextService,
        private _countryService: CountryService) {
        this.isLoaded = false;

        this.languageChanged = this._countryService.languageChanged.subscribe({
            next: (newValue: string) => {
                if (newValue) {
                    this.selectedText = this.textResumes.find(x => x.language == newValue);
                }
            }
        });
    }

    public ngOnInit(): void {
        let language = this._countryService.getLanguage();
        this.textResumes = this._textService.getResume();
        this.selectedText = this.textResumes.find(x => x.language == language);
        this.loadData(this.countryCode);
    }

    public loadData(countryCode: string): void {
        this._virusService.getCountryTotal(countryCode).subscribe((data: CountryTotal) => {
            this.countryTotal = data;
            this.isLoaded = true;
        }, () => {
            this._alertService.showError('Ops! Tivemos problemas ao obter os dados do resumo =/');
        });
    }
}