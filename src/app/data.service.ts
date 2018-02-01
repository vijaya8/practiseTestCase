import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class DataService {

  constructor(private http:HttpClient) { }


  getUsers(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .map((res)=>{
      console.log('res in service');
        return res;
    })
  }

}
