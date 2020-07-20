import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '@shared/material/material.module';
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '@shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrincipalModule } from '@components/principal.module';

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		FormsModule,
        HttpClientModule,
        NgbModule,
        MaterialModule,
        ChartsModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule, 
        SharedModule,
        PrincipalModule
	],
	providers: [
        RouterModule
	]
})
export class HomeModule { }