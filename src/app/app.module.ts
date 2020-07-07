import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, enableProdMode } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomHttpInterceptor } from '@interceptors/http-interceptor';
import { MaterialModule } from './shared/material/material.module';
import { PrincipalModule } from './modules/principal.module';
import { AppRoutingModule } from './app.routing';
import { NgxPaginationModule } from 'ngx-pagination';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { environment } from 'src/environments/environment';

registerLocaleData(localePt, 'pt-BR');

if (environment.production) {
  enableProdMode();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    PrincipalModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
