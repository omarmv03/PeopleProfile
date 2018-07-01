import { Component } from '@angular/core';
import { User } from '../fwk/interface/user';

@Component({
  selector: 'app-people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.css']
})
export class PeopleInfoComponent {

  /**VARS */
  labelInput:   string = "Enter Username: ";
  user:         User; 
  inputValue:   string = "";
  
  constructor() { }

  onItemClick(ev) {
    this.user = ev;
  }

}
