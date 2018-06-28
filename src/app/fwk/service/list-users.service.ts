import { Injectable } from '@angular/core';
import { ListUserProxyService } from './list-user-proxy.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  constructor(private proxy: ListUserProxyService) { }

  getUsers(): Observable<any> {
    return this.proxy.getUserInfo().map(
      (response) => {
        return response;
      }
    );
  } 

  getUserByName(name:string){
    var a=  this.proxy.getUserInfo().map(
      (response) => {
        const data = response.json();
        console.log(data);
      }
    );
    console.log(a);
  }  
}