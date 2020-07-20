import { NgModule } from '@angular/core';
import { MainComponent } from '@shared/components/main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        RouterModule,
    ],
    exports: [],
    providers: [],
    bootstrap: []
})
export class SharedModule {}