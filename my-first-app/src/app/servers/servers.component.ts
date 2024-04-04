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
  entryCreated = false;

  constructor () {
    setTimeout(() => {
      this.allowNewEntry = false
    }, 2000)
  }

  onCreatedEntry(){
    this.entryCreated = true;
    this.entryCreationStatus = "Server was created! Name is " + this.entryName
  }
}
