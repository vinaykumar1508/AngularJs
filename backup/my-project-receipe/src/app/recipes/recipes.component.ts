import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  
  selectedRecipe : Recipe;
  constructor() { }

  ngOnInit() {
  }

}
