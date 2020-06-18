import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bet } from '../models/bet.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private HttpClient: HttpClient, ) { }

  placeBet(bet: Bet){
    this.HttpClient.post<Bet[]>('http://localhost:3000/api/bet', bet)
  }

  getBets(): Observable<Bet[]>{
    return this.HttpClient.get<Bet[]>('http://localhost:3000/api/bets')
  }
}
