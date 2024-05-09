import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent implements OnChanges {

  @Input() username!: string

  loader: boolean = true;
  name: any;
  userdata: any;
  userlogin: any;
  userrepodata: any;
  pgnumber = 1;
  nouser: boolean = false;
  optionselectedvalue: any = 10;
  
  ngOnChanges(): void {
    this.pgnumber = 1;      
    this.reset();      
    this.getUser()

  }

  constructor(
    private apiService: ApiService
  ) { }

  reset(){
    this.userdata=null;
    this.userrepodata=null;
  }


  
  pageChange(page: any) {
    this.pgnumber = page;
    this.apiService.getRepo(this.userlogin, this.pgnumber, this.optionselectedvalue).subscribe(
      {
        next: (data: any) => {
          this.loader = false;
          this.userrepodata = data;
          
        },
        error: (err) => {

          console.log("Error")

        }
      }

    );

  }

  optionselected(e: any) {
    this.optionselectedvalue = e.target.value;
    this.apiService.getRepo(this.userlogin, this.pgnumber, e.target.value).subscribe(
      {
        next: (data: any) => {
          this.loader = false;
          this.userrepodata = data;

        },
        error: (err) => {

          console.log("Error")

        }
      }

    );
  }


  getUser() {
    this.pgnumber = 1;
    this.nouser = false;
    this.apiService.getUser(this.username).subscribe(
      {
        next: (data: any) => {

          this.name = data.name;
          this.userdata = data;
          this.userlogin = data.login;
          this.apiService.getRepo(this.userlogin, this.pgnumber, this.optionselectedvalue).subscribe(
            {
              next: (data: any) => {
                this.loader = false;
                this.userrepodata = data;

                console.log(this.userrepodata);
              },
              error: (err) => {
                this.userrepodata = "NO"
                this.loader = false;
                console.log("Error11")

              }
            }

          );

        },
        error: (err) => {
          this.nouser = true;
        }
      }

    );
  }


  ngOnInit() {
  }
}
