import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpModule, Response } from '@angular/http';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [DataService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  describe('get the users', () =>{

    it('get the users', () => {

      let userService = TestBed.get(DataService);

      userService
      .getUsers()
      .toPromise()
      .then((users) =>{
        expect(users).toBeDefined();
        expect(users.length).toBe(10);
      })

    })
  })
  
});
