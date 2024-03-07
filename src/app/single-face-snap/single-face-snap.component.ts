import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { CommonModule, NgClass, NgIf, NgStyle } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgIf, NgStyle, NgClass, CommonModule, RouterModule],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  isSnapped!: boolean;
  buttonText!: string;

  constructor(
    private FaceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isSnapped = false;
    this.buttonText = 'Oh snap!';
    //id récupépérée sera de type string ici, il faut faire du typecast(+) pour en faire un number
    const faceSnapId = +this.route.snapshot.params['id'];
    //on initialise le faceSnap affiché en le récupérant depuis le service par son id
    this.faceSnap = this.FaceSnapsService.getFaceSnapById(faceSnapId);
  }

  //la méthode qui permet d'ajouter un snap à l'image on Click
  onSnap() {
    if (!this.isSnapped) {
      this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.isSnapped = true;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh snap!';
      this.isSnapped = false;
    }
  }
}
