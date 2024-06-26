import { Component, EventEmitter, Output } from '@angular/core';
import {RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-carta',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './nav-carta.component.html',
  styleUrl: './nav-carta.component.css'
})
export class NavCartaComponent {
  @Output() CambiarSeccionEvent = new EventEmitter<string>();

  cambiarSeccion(seccion : string){
    this.CambiarSeccionEvent.emit(seccion);
  }
  

}
