import { Recipe } from "src/app/recipes/recipe.model";

export class RecipeService{
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is simply a test','https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'),
        new Recipe('Another Test Recipe','This is simply a test','https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d')
      ];

     getRecipes(){
         return this.recipes.slice(); // slice returns a new array(copy of original array) not the original array 
     } 
}