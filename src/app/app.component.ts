import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
          new Quote(1,'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.'),
          new Quote(2, 'I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.'),
          new Quote(3, 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us'),
          new Quote(4, 'Get busy living or get busy dying'),
          new Quote(5, 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.'),
          new Quote(6, 'When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.'),

      ]
  }
