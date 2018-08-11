import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.', 'Dr. Seuss', new Date(1944, 3, 5)),
    new Quote(2, 'I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.', 'Marilyn Monroe', new Date(1934, 12, 15)),
    new Quote(3, 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.', 'Hellen Keller', new Date(1994, 10, 18)),
    new Quote(4, 'Get busy living or get busy dying.', 'Stephen King', new Date(1994, 8, 17)),
    new Quote(5, 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.', 'Mark Twain', new Date(1902, 2, 28)),
    new Quote(6, 'When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.', 'Audre Lorde', new Date(2004, 12, 12)),

  ]

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }
  ngOnInit() {
  }
}
