import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewEntry = true;

  constructor () {
    setTimeout(() => {
      this.allowNewEntry = false
    }, 2000)
  }
}
