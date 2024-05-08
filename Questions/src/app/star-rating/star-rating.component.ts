import { Component } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  rating: any = 0;


  onHover(ratingIdx: any){
    this.rating = ratingIdx + 1;
  }
}
