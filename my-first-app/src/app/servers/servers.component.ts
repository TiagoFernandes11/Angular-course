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
  servers = ["Testserver", "testServer2", "test3"];

  constructor () {
    setTimeout(() => {
      this.allowNewEntry = false
    }, 2000)
  }

  onCreatedEntry(){
    this.entryCreated = true;
    this.servers.push(this.entryName)
    this.entryCreationStatus = "Server was created! Name is " + this.entryName
  }
}
