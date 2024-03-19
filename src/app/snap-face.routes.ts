import { Routes } from '@angular/router';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { AuthGuard } from './guards/auth.guard';

export const FACE_SNAP_ROUTES: Routes = [
  { path: 'create', component: NewFaceSnapComponent, canActivate: [AuthGuard] },
  { path: ':id', component: SingleFaceSnapComponent, canActivate: [AuthGuard] },
  { path: '', component: FaceSnapListComponent, canActivate: [AuthGuard] },
];

export default FACE_SNAP_ROUTES;
