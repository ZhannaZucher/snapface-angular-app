import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule, NgClass } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  //on crée une propriété personnalisée qui peut être utilisée depuis extérieur grâce au décorateur @Input
  // synthaxe:
  //@Input nom de la propriété : son type
  @Input() faceSnap!: FaceSnap;
  //on déclare les props statiques
  isSnapped!: boolean;
  buttonText!: string;

  constructor(
    private FaceSnapsService: FaceSnapsService,
    private router: Router
  ) {}

  //La méthode  ngOnInit()  est appelée automatiquement par Angular au moment de la création de chaque instance du component. Elle permet notamment d'initialiser des propriétés.
  ngOnInit() {
    //ici on initialise que les propriétés statiques du composant
    this.isSnapped = false;
    this.buttonText = 'Oh snap!';
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

  onViewFaceSnap(): void {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
