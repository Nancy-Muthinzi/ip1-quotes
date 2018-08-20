import { Injectable } from '@angular/core';
import { Quotes } from "../quotes"

@Injectable()
export class QuoteService {
  getQuotes() {
    return Quotes;
  }
}
