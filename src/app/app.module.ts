import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component'; 

import { UsersService } from './services/users.service';
import { CountMonthsPipe } from './pipe/count-months.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    CountMonthsPipe,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      
    ]),
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
