import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  userEmail!: string;
  //on peut déclarer ici la valeur par défaut :
  // userEmail: string = 'fofo@gmail.com';

  constructor(private router: Router) {}

  onClick(): void {
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(): void {
    console.log(this.userEmail);
  }
  ngOnInit(): void {}
}
