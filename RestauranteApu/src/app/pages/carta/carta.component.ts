import { Component, OnInit } from '@angular/core';
import { NavCartaComponent } from './nav-carta/nav-carta.component';
import { RouterLink } from '@angular/router';
import { APICartaService } from '../../shared/services/apicarta.service';
import { SeccionInterface } from '../../shared/interfaces/seccion-interface';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [NavCartaComponent, RouterLink],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css',
})
export class CartaComponent implements OnInit {
  carta!: SeccionInterface;
  idPlato !: number;

  constructor(
    private dataPlatos: APICartaService
  ) {}

  ngOnInit(): void {
    this.loadData('Entrantes');
  }

  sendData(idPlato : number){
    this.idPlato = idPlato;
    this.dataPlatos.sendPlato(this.idPlato)
  }

  loadData(seccion: string) {
    this.dataPlatos.getSeccion(seccion).subscribe({
      next: (data) => {
        this.carta = data;
      },
      error: (err) => {
        console.log('Error al cargar Api');
      },
      complete: () => {
        console.log('Completed');
      }
  });
  }

  cambiarSeccion(seccion: string) {
    switch (seccion) {
      case 'Entrantes':
        this.loadData(seccion);
        break;
      case 'Principales':
        this.loadData(seccion);
        break;
      case 'Postres':
        this.loadData(seccion);
        break;
      case 'Cafes':
        this.loadData(seccion);
        break;
      case 'Cocteles':
        this.loadData(seccion);
        break;
    }
  }
}
