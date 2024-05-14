import { Component, OnInit } from '@angular/core';
import { CoctelesInterface } from '../../shared/interfaces/cocteles-interface';
import { CocktailServiceService } from '../../shared/services/cocktail-service.service';
import { PlatoServiceService } from '../../shared/services/plato-service.service';
import { CartaInterface, Plato } from '../../shared/interfaces/carta-interface';
import { Pedido } from '../../shared/interfaces/pedido';
import { NavCartaComponent } from '../../shared/components/nav-carta/nav-carta.component';
import { APICartaService } from '../../shared/services/apicarta.service';
import { SeccionInterface } from '../../shared/interfaces/seccion-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [ NavCartaComponent, RouterLink],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css',
})
export class DeliveryComponent implements OnInit {
  cocteles: CoctelesInterface = { drinks: [] };
  carta!: CartaInterface;
  listaPlatos: Pedido[] = [];
  cuenta: number = 0;

  constructor(
    private dataCocktail: CocktailServiceService,
    private dataPlatos: PlatoServiceService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dataCocktail.getData().subscribe(
      (data: CoctelesInterface) => {
        this.cocteles = data;
      },
      (error) => {
        console.log('ERROR AL CARGAR API');
      },
      () => {
        console.log('Busqueda realizada');
      }
    );
    this.dataPlatos.getData().subscribe(
      (data: CartaInterface) => {
        this.carta = data;
      },
      (error) => {
        console.log('Error al cargar Api');
      },
      () => {
        console.log('Completed');
      }
    );
  }

  Add(nombre: string, precio: number) {
    this.cuenta += precio;
    this.listaPlatos.push({ nombre, precio });
  }

  Delete(precio: number) {
    this.cuenta -= precio;
    this.listaPlatos.pop();
  }
}
