import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  isLogin = false;
  isSignup = false;
  private authListenerSubs: Subscription;

  constructor(private authService: AuthService,private router: Router) {

  }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getAuthStatus();
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    })
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  // onLogin(form: NgForm) {
  //   this.authService.loginUser(form.value.email, form.value.password);
  //   this.router.navigate(['/bets'])
  // }

  // onSignup(form: NgForm) {
  //   console.log(form.value)
  //   if(form.invalid){
  //     return;
  //   }
  //   this.authService.createUser(form.value.email, form.value.password)
  // }

  // showLogin(){
  //   this.isSignup = false;
  //   this.isLogin = !this.isLogin;
  // }

  // showSignup(){
  //   this.isLogin = false;
  //   this.isSignup = !this.isSignup;
  // }
}
