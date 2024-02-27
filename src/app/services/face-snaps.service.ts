import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

//@Injectable permet de transformer une classe en service
@Injectable({
  //on dit que ce service doit être enregistré à la racine de l'application pour pouvoir partager les mêmes données et la même logique
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: "Mon meilleur ami d'enfance",
      createdDate: new Date(),
      snaps: 140,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location: 'Paris',
    },
    {
      id: 2,
      title: 'Serge',
      description: 'Mon frère adoré',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location: 'Helsinki',
    },
    {
      id: 3,
      title: 'Nounours',
      description: 'Meilleur doudou pour dormir',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    },
  ];
  //méthode permettant de récupérer data de snaps, retourne un array de snaps
  //pour l'instant il n'ya pas de fetch on fait un mock
  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
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
}
