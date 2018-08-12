import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'like-box',
  templateUrl: './quote-like.component.html',
  styleUrls: ['./quote-like.component.css']
})
export class QuoteLikeComponent implements OnInit {
  numberOfLikes: number = 0;

  likeButtonClick() {
    this.numberOfLikes++;
  }

  dislikeButtonClick() {
    this.numberOfLikes--;
  }

  constructor() { }

  ngOnInit() {
  }

}
