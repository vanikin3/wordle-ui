import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartGameService } from '../services/StartGameService';
import { GuessesComponent } from '../guesses/guesses.component';
import { index } from '../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private service: StartGameService,
              private guesses : GuessesComponent){

              }
  ngOnInit(): void {
    
  }

  start = async() => {
    try{
      let num = await this.service.start();
      index.wordNum = num;
      await this.router.navigate(['/game']);
    }catch (e){
      console.error(e);
    }
  }

}
