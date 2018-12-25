import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDEPeAaSO4m65-DjleDGdCYwIuHjEjE8R8",
      authDomain: "ng-recipe-book-8dcd7.firebaseapp.com"
    });
  }

  loadedFeature='recipe';
  onNavigate(feature: string){
    this.loadedFeature=feature;
  }
}
