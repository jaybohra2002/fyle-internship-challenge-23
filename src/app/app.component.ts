import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  username: string = "";
  title = 'fyle-challenge';

  constructor(
    private apiService: ApiService
  ) { }


  

  getusername(username: string){
    this.username = username;
  }
  





  ngOnInit() {
  }
}
