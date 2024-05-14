import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlatoInterface } from '../../interfaces/plato-interface';
import { APICartaService } from '../../services/apicarta.service';
import { NavCartaComponent } from '../nav-carta/nav-carta.component';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [NavCartaComponent, RouterLink],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent implements OnInit {
  idPlato!: number;
  plato!: PlatoInterface;

  constructor(private platoData: APICartaService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.platoData.getPlato().subscribe({
      next: (data) => {
        this.plato = data;
      },
      error: (err) => {
        console.log('Error');
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }
  sendData(idPlato: number) {
    this.idPlato = idPlato;
    this.platoData.sendPlato(this.idPlato);
  }
  CambiaPlato(id: number) {
    if (id > 0 && id < 39) {
      this.platoData.sendPlato(id);
      this.loadData();
    }
  }
}
