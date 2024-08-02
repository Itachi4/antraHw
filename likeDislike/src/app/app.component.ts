import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass],
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.css']
})
export class AppComponent {
  title = 'likeDislike';
  initialLikes = 100;
  initialDislikes = 25;
  isLikeButtonClicked: boolean = false;
  isDislikeButtonClicked: boolean = false;


  onLike(){
    this.isLikeButtonClicked = !this.isLikeButtonClicked;
    this.isLikeButtonClicked ? this.initialLikes+=1 : this.initialLikes-=1
  }

  onDislikes(){
    this.isDislikeButtonClicked = !this.isDislikeButtonClicked;
    this.isDislikeButtonClicked ? this.initialDislikes+=1 : this.initialDislikes-=1
  }
}
