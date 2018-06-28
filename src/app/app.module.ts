import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleInfoComponent } from './people-info/people-info.component';
import { FwkModule } from './fwk/fwk.module';
import { ListUserProxyService } from './fwk/service/list-user-proxy.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PeopleInfoComponent,
  ],
  imports: [
    BrowserModule,
    FwkModule,
    HttpModule
  ],
  providers: [ListUserProxyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
