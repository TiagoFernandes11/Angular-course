import { Component } from '@angular/core';
import { LogginService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogginService, AccountsService],
})
export class NewAccountComponent {
  constructor(
    private logginService: LogginService,
    private accountsService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    this.logginService.logStatusChande(accountStatus);
  }
}
