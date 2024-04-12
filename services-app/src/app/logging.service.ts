import { Injectable } from '@angular/core';

@Injectable()
export class LogginService {
  logStatusChande(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
