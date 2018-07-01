import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ListUsersService } from './list-users.service';
import { ServerService } from './server.service';

describe('ListUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ListUsersService,
                  ServerService]
    });
  });

  it('should be created', inject([ListUsersService], (service: ListUsersService) => {
    expect(service).toBeTruthy();
  }));
});
