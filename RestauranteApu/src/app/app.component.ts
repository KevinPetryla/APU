import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CartaComponent } from './pages/carta/carta.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { CartComponent } from './pages/cart/cart.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContactoComponent, CartaComponent, IniciosesionComponent, RegistroComponent, InicioComponent, NavbarComponent, AboutusComponent, DeliveryComponent, CartComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RestauranteApu';
}
