import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  isSnapped!: boolean;
  buttonText!: string;
  imageUrl!: string;

  //La méthode  ngOnInit()  est appelée automatiquement par Angular au moment de la création de chaque instance du component. Elle permet notamment d'initialiser des propriétés.
  ngOnInit() {
    this.title = 'Archibald';
    this.description = "Mon meilleur ami d'enfance";
    this.createdDate = new Date();
    this.snaps = 6;
    this.isSnapped = false;
    this.buttonText = 'Oh snap!';
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }

  //la méthode qui permet d'ajouter un snap à l'image on Click
  onSnap() {
    if (!this.isSnapped) {
      this.snaps++;
      this.isSnapped = true;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.snaps--;
      this.buttonText = 'Oh snap!';
      this.isSnapped = false;
    }
  }
}
