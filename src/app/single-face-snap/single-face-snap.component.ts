import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { CommonModule, NgClass, NgIf, NgStyle } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgIf, NgStyle, NgClass, CommonModule, RouterModule],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  isSnapped!: boolean;
  buttonText!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isSnapped = false;
    this.buttonText = 'Oh snap!';
    //id récupépérée sera de type string ici, il faut faire du typecast(+) pour en faire un number
    const faceSnapId = +this.route.snapshot.params['id'];
    //on initialise le faceSnap affiché en le récupérant depuis le service par son id
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  //la méthode qui permet d'ajouter un snap à l'image on Click
  onSnap(faceSnapId: number) {
    if (!this.isSnapped) {
      this.faceSnap$ = this.faceSnapsService
        .snapFaceSnapById(faceSnapId, 'snap')
        .pipe(
          tap(() => {
            this.isSnapped = true;
            this.buttonText = 'Oops, unSnap!';
          })
        );
    } else {
      this.faceSnap$ = this.faceSnapsService
        .snapFaceSnapById(faceSnapId, 'unsnap')
        .pipe(
          tap(() => {
            this.buttonText = 'Oh snap!';
            this.isSnapped = false;
          })
        );
    }
  }
}
