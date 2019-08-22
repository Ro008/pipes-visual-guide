import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { SafeDOMPipe } from './pipes/safe-dom.pipe';
import { EncryptPipe } from './pipes/encrypt.pipe';
registerLocaleData(localeEs);


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, SafeDOMPipe, EncryptPipe],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
