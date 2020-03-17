import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './modules/home/home.component';

const RootRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(RootRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }