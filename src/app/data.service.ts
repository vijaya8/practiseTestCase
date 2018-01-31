import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import  'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) { }


  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
          .map((response: Response) =>  {
            console.log('...',response) ;
            return response.json();
          }
        )
  }

}
