import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl([
      '',
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get usernameControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  login(): void {
    let username = String(this.loginForm.get('username')?.value);
    let password = String(this.loginForm.get('password')?.value);
    console.log(username,password)
    this.authenticationService
      .login(username, password)
      .subscribe(() => this.router.navigateByUrl('/'));
  }
}
