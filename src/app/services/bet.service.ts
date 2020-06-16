import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bet } from '../models/bet.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private http: HttpClient, ) { }

  placeBet(bet: Bet){
    return this.http.post<Bet[]>('http://localhost:3000/api/bet', bet)
  }

  getBets() {
    return this.http.get('http://localhost:3000/api/bet')
  }
}
