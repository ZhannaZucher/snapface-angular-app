import {
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export function AuthInterceptor(
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> {
  //on injecte le service pour récupérer le token
  const authToken = inject(AuthService).getToken();
  //on crée un headers avec le token
  const headers = new HttpHeaders().append(
    'Authorization',
    `Bearer ${authToken}`
  );
  //puisque objet requête est immuable on le clone pour générer une new requête qui inclut dans objet de config les headers avec token
  const modifiedRequest = req.clone({ headers });
  //on envoie cette requête modifiée à la suite des executions avec next
  return next(modifiedRequest);
}
