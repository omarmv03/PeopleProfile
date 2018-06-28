import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListUserProxyService } from '../fwk/service/list-user-proxy.service';
import { User } from '../fwk/interface/user';

@Component({
  selector: 'app-people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.css']
})
export class PeopleInfoComponent implements OnInit {

  labelInput: string = "Ingrese el usuario: "
  users: User[]; 
  subs: Subscription;

  constructor(private service: ListUserProxyService) { }

  ngOnInit() {
    this.subs = this.service.getUserInfo().subscribe( data => {
      this.users = data.json();
      }
    );
  }

}
