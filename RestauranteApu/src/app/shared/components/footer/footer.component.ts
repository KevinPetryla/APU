import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  miFuncion() {
    // Lógica que se ejecutará cuando se haga clic en el botón
    console.log('Se hizo clic en el botón');
  }

}
