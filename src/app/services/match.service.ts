import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Match } from '../models/match.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private HttpClient: HttpClient) { }

  getMatches(): Observable<Match[]>{
    return this.HttpClient.get<Match[]>('http://localhost:3000/api/matches')
  }
}
