import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ListUserProxyService {

  public apiHost: string = 'http://localhost:4200/assets/users.json';
  constructor(private http: Http) { }

  getUserInfo(): any {
    return this.http.get(this.apiHost);
  }
}
