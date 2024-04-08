import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Yeshua is the Lord',
      'Yeshua is the Lord',
      'https://jornaldacidadegv.com.br/wp-content/uploads/2024/01/Jesus_Cristo.webp'
    ),
    new Recipe(
      'Yeshua is the Lord',
      'Yeshua is the Lord',
      'https://cdn.pixabay.com/photo/2023/10/21/02/19/ai-generated-8330558_1280.jpg'
    ),
    new Recipe(
      'Yeshua is the Lord',
      'Yeshua is the Lord',
      'https://static.vecteezy.com/ti/fotos-gratis/p2/24401816-a-sofrimentos-do-jesus-cristo-dentro-a-coroa-do-espinhos-ai-gerativ-gratis-foto.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
