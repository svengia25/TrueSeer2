import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;

  constructor(public authService: AuthService, private router: Router){
    
  }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    this.authService.loginUser(form.value.email, form.value.password);
    this.router.navigate(['/bets'])
  }

}
