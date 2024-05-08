import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "star-rating", component: StarRatingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
