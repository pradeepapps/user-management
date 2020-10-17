import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>('/user', user);
  }

  login(data: any): void {
    if (data.rememberMe) {
      localStorage.setItem('uuid', btoa(JSON.stringify(data)));
    } else {
      sessionStorage.setItem('uuid', btoa(JSON.stringify(data)));
    }
  }

  isAuthenticated(): boolean {
    let uuid = sessionStorage.getItem('uuid');
    uuid = uuid ? uuid : localStorage.getItem('uuid');
    if (uuid) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('uuid');
    sessionStorage.removeItem('uuid');
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('/users');
  }

}
