import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-not-found-component',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './page-not-found-component.component.html',
  styleUrl: './page-not-found-component.component.css'
})
export class PageNotFoundComponentComponent {

}
