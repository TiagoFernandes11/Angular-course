import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewEntry = true;
  entryCreationStatus = "No entry was created!"
  entryName="Test Name"

  constructor () {
    setTimeout(() => {
      this.allowNewEntry = false
    }, 2000)
  }

  onCreatedEntry(){
    this.entryCreationStatus = "Server was created!"
  }
}
