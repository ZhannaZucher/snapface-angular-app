import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';

//tableau comportant ttes les routes de l'application
export const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  {
    path: 'facesnaps',
    loadChildren: () =>
      import('./snap-face.routes').then((m) => m.FACE_SNAP_ROUTES),
  },
  { path: '', component: LandingPageComponent },
];
