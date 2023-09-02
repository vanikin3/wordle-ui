import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartGameService } from '../services/StartGameService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private service: StartGameService){

              }
  ngOnInit(): void {
    
  }

  start = async() => {
    try{
      await this.service.start();
      await this.router.navigate(['/game']);
    }catch (e){
      console.error(e);
    }
  }

}
