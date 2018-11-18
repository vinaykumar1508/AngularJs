import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tamatoes',10)
  ];
  constructor() { }

  ngOnInit() {
  }
  
  onIngrediantAdded(ingredient: Ingredient){
    console.log('onIngrediantAdded:'+ingredient);
    this.ingredients.push(ingredient);
  }
}
