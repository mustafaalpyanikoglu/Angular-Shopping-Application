import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
  ];
}
