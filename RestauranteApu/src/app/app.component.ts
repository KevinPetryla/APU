import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CartaComponent } from './pages/carta/carta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContactoComponent, CartaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RestauranteApu';
}
