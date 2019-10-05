import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'swapnil';
  password = '';
  errorMessage = 'Invalid Credentials. Try Again !!';
  invalidLogin = false;

  // here we are using dependency injection
  // router is a variable nad 'Router' is type
  // dependency injection
  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService
  ) {}

  ngOnInit() {}

  handleLogin() {
    // if (this.username === 'swapnil' && this.password === 'dummy') {
    if (
      this.hardcodedAuthenticationService.authenticate(
        this.username,
        this.password
      )
    ) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
      console.log('login successful');
    } else {
      this.invalidLogin = true;
    }
  }
}
