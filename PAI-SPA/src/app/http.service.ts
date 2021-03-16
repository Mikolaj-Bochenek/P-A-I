import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

const URL = '/api';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // dla uproszczenia działania aplikacji - UserService będzie przechowywać dane o zalogowanym uzytkowniku
  isLogin = false;
  loginUserData: User;

  constructor(private http: HttpClient) { }

  // Funkcja umożliwiająca logowanie
  login(user: User): Observable<any> {
    return this.http.post(URL + '/login', user);
  }

  // Funkcja umożliwiająca wylogowanie
  logout(): Observable<any> {
    return this.http.get(URL + '/logout');
  }

  // Funkcja umożliwiająca rejestrację
  register(user: User): Observable<any> {
    return this.http.post(URL + '/register', user);
  }

  // Setter ustawiający wartość w polu loginUserData
  set user(user: User) {
    this.loginUserData = user;
  }
}
