import { AuthData } from './../models/auth-data.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: "root"})
export class AuthService{

    constructor(private http: HttpClient) {}

    createUser(email: String, password: String) {
        const authData: AuthData = {email: email, password: password}
        this.http.post("http://localhost:3000/api/user/signup", authData)
        .subscribe(response => {
            console.log(response)
        })
    }

    loginUser(email: String, password: String) {
        const authData: AuthData = {email: email, password: password}
        this.http.post("http://localhost:3000/api/user/login", authData)
        .subscribe(response => {
            console.log(response)
        })
    }
}