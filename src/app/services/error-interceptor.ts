import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private _snackBar: MatSnackBar) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {
                if(err.error.message == undefined) {
                    this._snackBar.open(err.error.error.message, 'Dismiss', {
                        duration: 2000,
                      })
                    return throwError(err);
                }
                console.log(err.error.message)
                this._snackBar.open(err.error.message, 'Dismiss', {
                    duration: 2000,
                  })
                return throwError(err);
            })
        )
        }
}

