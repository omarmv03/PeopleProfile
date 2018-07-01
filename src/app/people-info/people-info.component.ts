import { Component, OnInit } from '@angular/core';
import { User } from '../fwk/interface/user';

@Component({
  selector: 'app-people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.css']
})
export class PeopleInfoComponent implements OnInit {

  /**VARS */
  labelInput:   string = "Enter Username: ";
  user:         User; 
  inputValue:   string = "";
  
  constructor() { }

  ngOnInit() {
    //
  }

  onItemClick(ev) {
    this.user = ev;
  }

}
