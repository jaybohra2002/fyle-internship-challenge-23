import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  public user: string = '';
  @Output() onSearchUser: EventEmitter<any> = new EventEmitter();

  constructor(private apiService: ApiService) { }


  getVal(item: any) {
    this.user = item.target.value;
  }

  searchUser() {
    this.onSearchUser.emit(this.user);

  }


  
  ngOnInit(): void {
  }

}
