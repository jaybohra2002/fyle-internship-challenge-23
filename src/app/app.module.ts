import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { NavbarComponent } from './navbar/navbar.component';

     



@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    ProfilepageComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule, MatInputModule, TextFieldModule, MatButtonModule, NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
