import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { registerLocaleData } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NZ_I18N } from "ng-zorro-antd/i18n";
import { pt_BR } from "ng-zorro-antd/i18n";

import pt from "@angular/common/locales/pt";

import { AppRoutingModule } from "@app/app-routing.module";
import { AppComponent } from "@app/app.component";
import { SharedModule } from "@shared/shared.module";

registerLocaleData(pt);

export function TranslationLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader, useFactory: TranslationLoaderFactory, deps: [HttpClient]}
    }),
    AppRoutingModule,
    SharedModule
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
  bootstrap: [AppComponent]
})
export class AppModule {}
