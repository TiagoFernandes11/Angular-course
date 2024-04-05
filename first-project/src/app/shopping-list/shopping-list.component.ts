import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredients = [
    new Ingredient('The Son', 1),
    new Ingredient('The Father', 1),
    new Ingredient('The Spirit', 1),
  ];
}
