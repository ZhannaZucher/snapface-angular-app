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
      title: 'Archibald',
      description: "Mon meilleur ami d'enfance",
      createdDate: new Date(),
      snaps: 140,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location: 'Paris',
    },
    {
      title: 'Serge',
      description: 'Mon frère adoré',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location: 'Helsinki',
    },
    {
      title: 'Nounours',
      description: 'Meilleur doudou pour dormir',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    },
  ];
}
