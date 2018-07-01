import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBoxComponent } from './search-box.component';
import { FormsModule } from '@angular/forms';
import { ListUsersService } from '../../service/list-users.service';
import { ServerService } from '../../service/server.service';
import { FilterPipe } from '../../pipes/filter.pipe';
import { HttpModule } from '@angular/http';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
                 HttpModule],
      declarations: [ SearchBoxComponent,
                      FilterPipe ],
      providers: [ListUsersService,
                  ServerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
