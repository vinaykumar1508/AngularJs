import { AccountsService } from './../accountsService';
import { LoggingService } from 'src/app/logging.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {

  constructor(private loggingService : LoggingService, private accountsService: AccountsService){}
  
  @Input() account: {name: string, status: string};
  @Input() id: number;

  onSetTo(status: string) {
    //this.loggingService.logStatusChange(status);
    this.accountsService.updateStatus(this.id, status);
    this.accountsService.statusUpdated.emit(status);
  }
}
