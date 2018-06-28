import { Component, OnInit, Input } from '@angular/core';
import { ListUsersService } from '../../service/list-users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Input() label: string;

  input: string;
  subs:  Subscription;

  constructor(private service: ListUsersService) { }

  ngOnInit() {
  }

  onSearch() {
    console.log(this.input);
    var a= this.service.getUserByName(this.input);
  }

}
