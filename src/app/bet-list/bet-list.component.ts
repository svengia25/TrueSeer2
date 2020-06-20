import { MatPaginator } from '@angular/material';
import { AuthService } from './../services/auth.service';
import { BetService } from './../services/bet.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Bet } from '../models/bet.model'

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.scss']
})


export class BetListComponent implements OnInit{

  displayedColumns: string[] = ['date', 'teams', 'prop', 'amount', 'odds', 'result'];
  tempData;
  dataSource;
  isLoading = false;
  userIsAuthenticated = false;
  userId = '5ee2b909ca9e910fd897770e';
  constructor(private betService: BetService,
    private authService: AuthService){
  }

 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(){
    this.betService.getBets().subscribe(res => {
      this.tempData = res;
      this.dataSource = new MatTableDataSource<any[]>(this.tempData);
      this.dataSource.paginator = this.paginator;
    })    
  }

  


}


