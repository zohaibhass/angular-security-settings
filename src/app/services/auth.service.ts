import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

export interface LoginRequest {
  username: string;
  password: string;
  deviceIdentifier: string;
  deviceSecret: string;
}

export interface LoginResponse {
  token: string;
  message?: string;
  user?: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginUrl = `${environment.apiBaseUrl}/auth/login`;
  private readonly tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, payload, {
      withCredentials: true
    }).pipe(
      catchError(this.handleError)
    );
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private handleError(error: HttpErrorResponse) {
    let msg = 'An unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      msg = `Client error: ${error.error.message}`;
    } else {
      msg = error.error?.message || `Server error ${error.status}`;
    }
    console.error(msg);
    return throwError(() => new Error(msg));
  }
}