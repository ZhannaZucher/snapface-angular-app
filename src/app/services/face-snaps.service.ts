import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//@Injectable permet de transformer une classe en service
@Injectable({
  //on dit que ce service doit être enregistré à la racine de l'application pour pouvoir partager les mêmes données et la même logique
  providedIn: 'root',
})
export class FaceSnapsService {
  constructor(private http: HttpClient) {}

  faceSnaps: FaceSnap[] = [];

  //la méthode retourne un Observable du type array de FaceSnap
  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap: FaceSnap | undefined = this.faceSnaps.find(
      (faceSnap) => faceSnap?.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  addNewFaceSnap(formValue: {
    title: string;
    description: string;
    imageUrl: string;
    location?: string;
  }): void {
    this.faceSnaps.push({
      ...formValue,
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
      createdDate: new Date(),
      snaps: 0,
    });
  }
}
