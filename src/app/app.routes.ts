import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

//tableau comportant ttes les routes de l'application
export const routes: Routes = [
  {
    path: 'facesnaps',
    loadChildren: () =>
      import('./snap-face.routes').then((m) => m.FACE_SNAP_ROUTES),
  },
  { path: '', component: LandingPageComponent },
];
