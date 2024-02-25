import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  mySecondSnap!: FaceSnap;
  myThirdSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = {
      title: 'Archibald',
      description: "Mon meilleur ami d'enfance",
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location: 'Paris',
    };
    this.mySecondSnap = {
      title: 'Serge',
      description: 'Mon frère adoré',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location: 'Helsinki',
    };
    this.myThirdSnap = {
      title: 'Nounours',
      description: 'Meilleur doudou pour dormir',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    };
  }
}
