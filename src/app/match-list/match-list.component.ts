import { AuthService } from './../services/auth.service';
import { Subscription } from 'rxjs';
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
  isLoading = true;
  matches: Match[];
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  constructor(public MatchService: MatchService, private dialog: MatDialog,  private authService: AuthService){ }

  ngOnInit() {
    this.MatchService.getMatches().subscribe(res => {
      this.matches = res;
      this.isLoading = false;
    });
    this.userIsAuthenticated = this.authService.getAuthStatus();
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    })
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
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

    this.dialog.open(MatchListAddDialog, dialogConfig)

  }

  test(match){
    console.log(match)

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    dialogConfig.data = match;

    this.dialog.open(MatchListInfoDialog, dialogConfig)
  }
}


@Component({
  selector: 'match-list-add-dialog',
  templateUrl: 'dialogAdd.component.html',
  styleUrls: ['dialogAdd.component.scss']
})
export class MatchListAddDialog{


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private betService: BetService, public dialogRef: MatDialogRef<MatchListAddDialog>) {}

  addBet(form: NgForm){
    let formData = form.value;
    this.dialogRef.close()
    if(form.invalid){
      return
    } else {
      this.betService.placeBet({
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

@Component({
  selector: 'match-list-info-dialog',
  templateUrl: 'dialogInfo.component.html',
  styleUrls: ['dialogInfo.component.scss']
})
export class MatchListInfoDialog{


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private betService: BetService, public dialogRef: MatDialogRef<MatchListInfoDialog>) {}

}