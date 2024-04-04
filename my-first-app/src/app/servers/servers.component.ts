import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewEntry = true;
  entryCreationStatus = "No entry was created!"
  entryName=""

  constructor () {
    setTimeout(() => {
      this.allowNewEntry = false
    }, 2000)
  }

  onCreatedEntry(){
    this.entryCreationStatus = "Server was created!"
  }

  onUpdateEntryName(event){
    this.entryName = (<HTMLInputElement>event.target).value;
  }
}
