import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Yeshua',
      'Yeshua is the lord',
      'https://images.squarespace-cdn.com/content/v1/62fbfbed423b4f1bb8caed31/15ded476-977d-456b-a283-0edc07c1a519/v2-5p8u9-rfofg.jpg'
    ),
    new Recipe(
      'Yeshua',
      'Yeshua is the lord',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8uSrDo-cbLkriW0pLX5q5BxvBWnO-52rQUnQEKJMNA&s'
    ),
    new Recipe(
      'Yeshua',
      'Yeshua is the lord',
      'https://i0.wp.com/lifegivingwaterdevo.org/wp-content/uploads/2016/01/festivals-pentecost-dove-fire-370x370.jpg?fit=370%2C370&ssl=1'
    ),
  ];
}
