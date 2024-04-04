import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  name = '';
  sentimento = '';

  constructor() {
    this.sentimento = 'amo';
    this.name = 'Rita';
  }
}
