import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListUserProxyService } from './service/list-user-proxy.service';
import { ListUsersService } from './service/list-users.service';

@NgModule({
  declarations: [
    SearchBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    SearchBoxComponent
  ],
  providers: [ListUserProxyService, ListUsersService],
  bootstrap: []
})
export class FwkModule { }
