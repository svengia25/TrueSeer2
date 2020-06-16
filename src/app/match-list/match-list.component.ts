import { MatchService } from './../services/match.service';
import { Component, OnInit } from '@angular/core';
import { Match } from '../models/match.model';
import {MatDialog, MatDialogConfig} from "@angular/material";




@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {
  matches: Match[];

  constructor(public MatchService: MatchService, private dialog: MatDialog){ }

  ngOnInit() {
    this.MatchService.getMatches().subscribe(res => {
      this.matches = res;
    });
  }

  sortDate(a,b){
    if(a.date == null){
      
    }
    if(b.date == null){
      
    }
   return a.date-b.date;
  };
  
  openDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(MatchListDialog, dialogConfig)

  }
}


@Component({
  selector: 'match-list-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss']
})
export class MatchListDialog {

  constructor() {}

}