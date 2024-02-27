import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { NgFor } from '@angular/common';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps.service';

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

  //on injecte le service pour récupérer les snaps en précisant son type
  //on passe le service en argument du contructor
  constructor(private FaceSnapsService: FaceSnapsService) {}
  ngOnInit(): void {
    //on initialise le faceSnaps local à partir du service
    this.faceSnaps = this.FaceSnapsService.getAllFaceSnaps();
  }
}
