import { AuthService } from './services/auth.service';
import { MatchListComponent } from './match-list/match-list.component';
import { BetListComponent } from './bet-list/bet-list.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'bets', component: BetListComponent, canActivate: [AuthGuard] },
  {path: 'matches', component: MatchListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
