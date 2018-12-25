import { Recipe } from './recipe.model';
import { Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";
import { Subject } from "rxjs/internal/Subject";

@Injectable()
export class RecipeService{
    
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'Tasty Schnitzel is awesome',
            'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries',20)
            ]
        ),
        new Recipe(
            'Big Fat Burger',
            'Oh yeah!!',
            'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
        ])
      ];
    
    constructor(private slService: ShoppingListService){}
    
    setRecipes(recipes: Recipe[]){
        this.recipes= recipes;
        this.recipesChanged.next(this.recipes.slice());        
    }

    getRecipes(){
         return this.recipes.slice(); // slice returns a new array(copy of original array) not the original array 
    }
    
    getRecipe(index: number){
        return this.recipes[index];
    }
        
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] =  newRecipe;
        this.recipesChanged.next(this.recipes.slice());        
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());                
    }
}