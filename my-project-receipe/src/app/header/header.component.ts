import { Component, OnInit  } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    private dataStorageService: DataStorageService, 
    private authService: AuthService) { }

  ngOnInit() {
  }
  
  onSaveData(){
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
  }
  
  onLogOut(){
    this.authService.logOut();
  }
}
