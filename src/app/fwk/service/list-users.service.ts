import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  constructor(private httpService: ServerService) { }

  getUsers(){
    var apiUsers: string = 'http://localhost:4200/assets/users.json';
    return this.httpService._get(apiUsers);
  }  
}