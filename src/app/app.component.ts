import { Component ,OnInit} from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  userData :any[];
  constructor(private dataService:DataService) {

  }

  ngOnInit() {
    this.dataService.getUsers()
      .subscribe(responseData => {
      this.userData = responseData;
      console.log('response..',responseData);
    })
  }
}

