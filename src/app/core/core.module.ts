import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Error404Page } from './pages/error404/error404.page';
import { JwtInterceptor } from './interceptors/jwt.interceptor';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http); // default ./assets/i18n/*.json
}

@NgModule({
  declarations: [Error404Page],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [CommonModule, HttpClientModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }]
})
export class CoreModule {}
