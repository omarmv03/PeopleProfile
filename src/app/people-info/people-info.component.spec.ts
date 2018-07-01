import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBoxComponent } from '../fwk/components/search-box/search-box.component';
import { PeopleInfoComponent } from './people-info.component';
import { FormsModule } from '@angular/forms';
import { FwkModule } from '../fwk/fwk.module';

describe('PeopleInfoComponent', () => {
  let component: PeopleInfoComponent;
  let fixture: ComponentFixture<PeopleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
                FwkModule ],
      declarations: [ PeopleInfoComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
