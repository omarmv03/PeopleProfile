import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ListUsersService } from '../../service/list-users.service';
import { User } from '../../interface/user';
import { FilterPipe } from '../../pipes/filter.pipe';
import { AbstractValueAccessor, NG_VALUE_ACCESSOR, forwardRef } from '../../helpers/abstracvalue.accessor';

export const CUSTOM_SEARCHBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SearchBoxComponent),
  multi: true
};

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  providers: [CUSTOM_SEARCHBOX_VALUE_ACCESSOR]
})
export class SearchBoxComponent extends AbstractValueAccessor implements OnInit {

  /**INPUTS */
  @Input() label:           string;
  @Input() id   :           string;
  /**OUTPUTS */
  @Output() itemClick =     new EventEmitter<any>();
  @Output() search    =     new EventEmitter<any>();
  /**VARS */
  _values :                 User[];
  isActive:                 boolean = true;

  constructor(private _listUsersService: ListUsersService) {
    super();
  }

  ngOnInit() {
    this._listUsersService.getUsers().subscribe((data) => {
      this._values = data;
    });
  }

  searchUser() {
    var resultSearch = this._values.filter(usr => usr.username === this.value)
    return resultSearch[0];
  }

  onSearch() {
      this.closeDropdown();
      this.search.emit(this.searchUser());
  }

  onItemClick(item: User) {
    this.value = item.username;
    this.closeDropdown();
    this.itemClick.emit(item);
  }

  closeDropdown() {
    if (this.isActive) {
        this.isActive = false;
    }
    this.search.emit(this.searchUser());
  }  

}
