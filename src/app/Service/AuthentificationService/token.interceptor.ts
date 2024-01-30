import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import {  throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(public authService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwtToken = this.authService.getJwtToken();

    if (jwtToken) {
      request = this.addToken(request, jwtToken);
    }

    return next.handle(request).pipe(
      catchError((error: any) => this.handleHttpError(error))
    );
  }

  private handleHttpError(error: any): Observable<any> {
    if (error instanceof HttpErrorResponse && error.status === 401) {
      return this.handle401Error(error);
    } else {
      return throwError(error);
    }
  }

  private handle401Error(error: HttpErrorResponse): Observable<any> {
    // Add your logic for handling 401 errors, e.g., redirect to login page
    console.error('Unauthorized. Redirecting to login page.');
    return throwError(error);
  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}



