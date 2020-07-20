import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component'
import { NgModule } from '@angular/core';

const HomeRoutes: Routes = [
	{ path: '', component: HomeComponent }
];

@NgModule({
	imports: [RouterModule.forChild(HomeRoutes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }