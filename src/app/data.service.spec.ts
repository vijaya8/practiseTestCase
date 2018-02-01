import { TestBed, inject } from '@angular/core/testing';
import { DataService } from './data.service';
import{ HttpClientModule } from '@angular/common/http';


describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  describe('get the users', () => {
   
    xit('get the users', (done) => {
      let userService = TestBed.get(DataService);

      userService
      .getUsers()
      .toPromise()
      .then((users) =>{
        console.log(users);
        expect(users).toBeDefined();
        expect(users.length).toBe(10);
        expect(Array.isArray(users)).toBeTruthy();
        expect(users[0].id).toBe(1);
        expect(users[0].name).toBe('Leanne Graham');
        done();
      })
    });

    it('test api',()=>{
      let userService = TestBed.get(DataService);
      userService
      .getUsers()
      .subscribe(res => {
        console.log('res',res.status);
        expect(res.status).toBe(200);
        expect(res.status).toEqual(400);
      })
    })
  });
  
});
