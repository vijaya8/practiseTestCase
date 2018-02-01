import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

  num: number;
  currentVal:number =0; 
  varAfterEachExmaple:number=0;

  constructor() { 

  }

  addNumbers(num){ 
    console.log('coming here...',num+','+ this.currentVal);
    this.currentVal += num; 
    console.log(this.currentVal);
    return this.currentVal;
 }
 
}
