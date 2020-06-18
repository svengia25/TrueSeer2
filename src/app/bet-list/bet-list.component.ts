import { Subscription } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { BetService } from './../services/bet.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.scss']
})


export class BetListComponent {

  displayedColumns: string[] = ['date', 'teams', 'prop', 'amount', 'odds', 'result'];
  dataSource;
  isLoading = false;
  userIsAuthenticated = false;
  userId = '5ee2b909ca9e910fd897770e';
  constructor(private betService: BetService,
    private authService: AuthService){
  }

  ngOnInit(){
    this.betService.getBets().subscribe(res => {
      this.dataSource = res;
    })
    
  }

  


}


