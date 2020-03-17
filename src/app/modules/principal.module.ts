import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../shared/material/material.module';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { VirusTrackerService } from '../core/services/virus-tracker.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HomeComponent,
        ResumeComponent,
        DashboardComponent
    ],
    imports: [
        NgbModule,
        MaterialModule,
        ChartsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        HomeComponent,
        ResumeComponent,
        DashboardComponent
    ],
    providers: [
        VirusTrackerService
    ],
    bootstrap: []
})
export class PrincipalModule { }