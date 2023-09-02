import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubmitGuessService } from '../services/SubmitGuessService';
import { OutputWord } from '../models/OutputWord';
import { index } from '../constants';

@Component({
  selector: 'app-guesses',
  templateUrl: './guesses.component.html',
  styleUrls: ['./guesses.component.css']
})
export class GuessesComponent {

  numOfGuesses : number = 0;
  guess : String = "";
  listOfGuesses : String[] = [];
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

    if(this.guess.length == 5){
      this.numOfGuesses += 1;
      this.listOfGuesses.push(this.guess);
      //call the service file
      response = await this.service.sendGuess(index.wordNum, this.guess);
      console.log(response);
      this.hasWon = this.checkGuess(response);
    }else{
      alert("Invalid input, the word needs to be 5 characters long. Please input a valid word");
    }

    if(this.hasWon){
      //do something to win
      await this.router.navigate(['/']);
    }
  }

  checkGuess(response : OutputWord): boolean {
    return false;
  }

  

}
