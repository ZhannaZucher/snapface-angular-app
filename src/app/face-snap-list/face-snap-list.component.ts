import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { NgFor } from '@angular/common';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [NgFor, FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
})
export class FaceSnapListComponent implements OnInit {
  //on déclare ici un tableau de faceSnap dont on ne connaît pas la longueur
  faceSnaps!: FaceSnap[];
  constructor() {}
  ngOnInit(): void {
    this.faceSnaps = [
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
}
