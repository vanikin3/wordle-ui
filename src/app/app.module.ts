import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuessesComponent } from './guesses/guesses.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule} from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    GuessesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [GuessesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
