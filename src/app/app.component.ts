import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TrueSeer';

  constructor(private AuthService: AuthService){

  }

  ngOnInit(){
    this.AuthService.autoAuthUser();
  }
}
