import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule, NgClass, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgIf, NgStyle, NgClass, CommonModule],
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

  //La méthode  ngOnInit()  est appelée automatiquement par Angular au moment de la création de chaque instance du component. Elle permet notamment d'initialiser des propriétés.
  ngOnInit() {
    //ici on initialise que les propriétés statiques du composant
    this.isSnapped = false;
    this.buttonText = 'Oh snap!';
  }

  //la méthode qui permet d'ajouter un snap à l'image on Click
  onSnap() {
    if (!this.isSnapped) {
      this.faceSnap.snaps++;
      this.isSnapped = true;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh snap!';
      this.isSnapped = false;
    }
  }
}
