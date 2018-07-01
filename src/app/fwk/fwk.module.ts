import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListUsersService } from './service/list-users.service';
import { ServerService } from './service/server.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { ClickOutsideDirective } from './directives/clickOutside.directive';

@NgModule({
  declarations: [
    SearchBoxComponent,
    FilterPipe,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SearchBoxComponent,
    FilterPipe,
    ClickOutsideDirective
  ],
  providers: [ListUsersService,
              ServerService],
  bootstrap: []
})
export class FwkModule { }
