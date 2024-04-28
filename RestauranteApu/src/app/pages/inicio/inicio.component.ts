import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
