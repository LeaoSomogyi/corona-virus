import { NgModule, LOCALE_ID } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../shared/material/material.module';
import { HomeComponent } from '@components/home/home.component';
import { ResumeComponent } from '@components/resume/resume.component';
import { VirusTrackerService } from '@services/virus-tracker.service';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalAlertComponent } from '@components/modal-alert/modal-alert.component';
import { DatePipe } from '@angular/common';

@NgModule({
    declarations: [
        HomeComponent,
        ResumeComponent,
        DashboardComponent,
        ModalAlertComponent
    ],
    imports: [
        NgbModule,
        MaterialModule,
        ChartsModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ],
    exports: [
        HomeComponent,
        ResumeComponent,
        DashboardComponent,
        ModalAlertComponent
    ],
    providers: [
        VirusTrackerService,
        DatePipe
    ],
    bootstrap: []
})
export class PrincipalModule { }