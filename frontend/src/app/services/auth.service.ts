import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  constructor(private router: Router) { }

  login(group: FormGroup) { 
    this.isLoggedIn = true;
    this.router.navigate(['/dashboard']); }
  logout() { this.isLoggedIn = false; }
}
