import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
// @ts-ignore
import {catchError, map} from "rxjs/operators";
// @ts-ignore
import {BehaviorSubject, Observable, throwError} from "rxjs";
import { OutputWord } from '../models/OutputWord';

/**
 * Service class for the Login Component, this class will
 * take in user input from the login component and try
 * to verify that the credentials supplied are correct by
 * calling the endpoint for our application
 */
@Injectable({
  providedIn: 'root'
})
export class SubmitGuessService {

  constructor(private httpClient: HttpClient) {

  }

  sendGuess(index : number, guess : String): Promise<any> {
    let url = 'http://localhost:8080/wordle/'+index+'/'+guess;

    return this.httpClient.get(url, {
      observe: 'response'
    }).pipe(
      map(resp => {
        return resp.body as OutputWord;
    }), catchError(this.handleError)
    ).toPromise();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    alert("Invalid input, the word needs to exist in the dictionary being used. Please input a valid word");
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}