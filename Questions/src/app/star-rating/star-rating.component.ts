import { Component } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  rating: any = 0;


  onHover(ratingIdx: any){
    // let stars = document.querySelectorAll(".star-icon");
    // for(let i = 0; i <= ratingIdx; i++){
    //   stars[i].classList.add("star-style");
    // }
    this.rating = ratingIdx + 1;
  }

  // onLeave(ratingIdx: any){
  //   let stars = document.querySelectorAll(".star-icon");
  //   for(let i = 0; i <= ratingIdx; i++){
  //     stars[i].classList.remove("star-style");
  //   }
  // }
}
