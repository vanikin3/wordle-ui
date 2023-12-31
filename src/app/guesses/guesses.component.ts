import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubmitGuessService } from '../services/SubmitGuessService';
import { OutputWord } from '../models/OutputWord';
import { index } from '../constants';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guesses',
  templateUrl: './guesses.component.html',
  styleUrls: ['./guesses.component.css']
})
export class GuessesComponent {

  guessesLeft : number = 6;
  guess : String = "";
  listOfGuesses : OutputWord[] = [];
  hasWon : boolean = false;

  constructor(private router: Router,
    private service: SubmitGuessService) {

  }
  ngOnInit(): void {

  }

  submitGuess = async() => {
    let response = <OutputWord>{
      characters: []
    };
    this.guess = (<HTMLInputElement>document.getElementById("playerGuess")).value;
    (<HTMLInputElement>document.getElementById("playerGuess")).value = '';

    if(this.guess.length !== 5){
      alert("Invalid input, the word needs to be 5 characters long. Please input a valid word");
    }else{
      response = await this.service.sendGuess(index.wordNum, this.guess);
      if(response==null){
        alert("Invalid input, the word needs to be 5 characters long. Please input a valid word");
      }else{
        this.hasWon = this.checkGuess(response);
        this.guessesLeft -= 1;
      }  
    }

    if(this.guessesLeft===0){
      alert("You lost, oof");
      await this.router.navigate(['/']);
    }

    if(this.hasWon){
      alert("You won with "+ this.guess + ", congrats!");
      await this.router.navigate(['/']);
    }
  }

  checkGuess(response : OutputWord): boolean {
    this.listOfGuesses.push(response);
    for(let c of response.characters){
      if(c.correct==="[X]" || c.correct==="[Y]"){
        return false;
      }
    }
    return true;
  }

  

}
