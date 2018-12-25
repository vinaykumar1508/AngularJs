import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SingupComponent } from 'src/app/auth/singup/singup.component';
import { SinginComponent } from 'src/app/auth/singin/singin.component';
import { AuthGaurd } from 'src/app/auth/auth-gaurd.service';

const appRoute: Routes =[
    { path : '', redirectTo: '/recipes', pathMatch: 'full'},
    { path : 'recipes', component: RecipesComponent, children:[
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent, canActivate: [AuthGaurd]},        
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGaurd]}
        
    ] },
    { path : 'shopping-list', component: ShoppingListComponent},
    { path : 'signup', component: SingupComponent},
    { path : 'signin', component: SinginComponent}
];                                                                                                                                                                                      

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}