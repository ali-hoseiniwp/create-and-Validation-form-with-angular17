import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  fakeUsername: string = "121212";
  fakePassword: string = "121212";

  constructor() { }

  login(username: string, password: string): Observable<any> {
    if (username == this.fakeUsername && password == this.fakePassword) {
      localStorage.setItem("token", "my-super-secret-token-from-server");
      return of(new HttpResponse({ status: 200 }));
    } else {
      return of(new HttpResponse({ status: 401 }));
    }
  }

  logout(): void {
    localStorage.removeItem("token");
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem("token") != null) {
      return true;
    }
    return false;
  }
}