import { MatchService } from './../services/match.service';
import { Component, OnInit } from '@angular/core';
import { Match } from '../models/match.model'


@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {
  matches: Match[];

  constructor(public MatchService: MatchService){ }

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
  
}
