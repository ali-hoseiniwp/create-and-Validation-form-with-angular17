import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }

}