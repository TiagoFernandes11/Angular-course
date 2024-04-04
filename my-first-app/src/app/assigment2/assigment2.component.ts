import { Component } from '@angular/core';

@Component({
  selector: 'app-assigment2',
  templateUrl: './assigment2.component.html',
  styleUrl: './assigment2.component.css'
})
export class Assigment2Component {
  dontAllowEntry = true;
  username = ""

  check(){
    if(this.username){
      this.dontAllowEntry = false
    }else{
      this.dontAllowEntry = true
    }
  }

  enter(){
    this.username = ""
    this.dontAllowEntry = true
  }
}
