import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {map} from "rxjs/operators";
// @ts-ignore
import {BehaviorSubject, Observable} from "rxjs";
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
    let url = 'http://localhost:8080/wordle/${index}/${guess}'

    return this.httpClient.get(url, {
      observe: 'response'
    }).pipe(
      map(resp => {
        return resp.body as OutputWord;
    })
    ).toPromise();
  }
}