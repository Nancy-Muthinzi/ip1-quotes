import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AlertsService} from './alert-service/alerts.service'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteLikeComponent } from './quote-like/quote-like.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    HighlightDirective,
    DateCountPipe,
    QuoteFormComponent,
    QuoteLikeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
