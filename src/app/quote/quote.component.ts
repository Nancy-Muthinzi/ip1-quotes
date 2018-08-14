import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
import { Quotes } from '../quotes'
import { QuoteService } from '../quotes/quote.service';
import { AlertsService } from '../alert-service/alerts.service'
// import { HttpClient } from '@angular/common/http'

import { Quote } from '../quote-class/quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  providers: [QuoteService],
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  // quotes = Quotes;

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

  }

  quotes: Quote[];
  alertService:AlertsService;

  constructor(quoteService: QuoteService, alertService:AlertsService) {
    this.quotes = quoteService.getQuotes();
    this.alertService = alertService;
  }

  ngOnInit() {


  }
}
