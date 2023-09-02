import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-guesses',
  templateUrl: './guesses.component.html',
  styleUrls: ['./guesses.component.css']
})
export class GuessesComponent {

  numOfGuesses : number = 0;
  guess : String = "";
  listOfGuesses : String[] = [];

  submitGuess(): void {
    this.guess = (<HTMLInputElement>document.getElementById("playerGuess")).value;
    (<HTMLInputElement>document.getElementById("playerGuess")).value = '';

    if(this.guess.length == 5){
      this.numOfGuesses += 1;
      this.listOfGuesses.push(this.guess);
      //call the service file
    }else{
      alert("Invalid input, the word needs to be 5 characters long");
    }
  }

}
