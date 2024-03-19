import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token!: string;

  login(): void {
    this.token = 'MyFakeToken'; //token sera initialisé au moment du login
  }

  getToken(): string {
    return this.token;
  }
}
