import { BetService } from './../services/bet.service';
import { MatchService } from './../services/match.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Match } from '../models/match.model';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';




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
  
  openDialog(match){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    dialogConfig.data = match;

    console.log(dialogConfig.data)

    this.dialog.open(MatchListDialog, dialogConfig)

  }
}


@Component({
  selector: 'match-list-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss']
})
export class MatchListDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private BetService: BetService, public dialogRef: MatDialogRef<MatchListDialog>) {}

  onSave(data){

    this.dialogRef.close()
  }

  addBet(form: NgForm){
    let formData = form.value;
    if(form.invalid){
      return
    } else {
      this.BetService.placeBet({
          userId: '5ee2b909ca9e910fd897770e',
          matchId: this.data.matchId,
          team1: formData.team1,
          team2: formData.team2,
          prop: formData.prop,
          amount: formData.amount,
          odds: formData.odds,
      })
    }

  }
}