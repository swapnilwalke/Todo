import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username, password) {
    if (username === 'swapnil' && password === 'dummy') {
      sessionStorage.setItem('authenticateUser', username);
      return true;
    }
    return false;
  }
  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }
  logout(){
    sessionStorage.removeItem('authenticateUser');
  }
}
