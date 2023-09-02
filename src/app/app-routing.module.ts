import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuessesComponent } from './guesses/guesses.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'game', component: GuessesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
