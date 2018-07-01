import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServerService } from './fwk/service/server.service';
import { AppComponent } from './app.component';
import { PeopleInfoComponent } from './people-info/people-info.component';
import { FwkModule } from './fwk/fwk.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PeopleInfoComponent,
  ],
  imports: [
    BrowserModule,
    FwkModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
