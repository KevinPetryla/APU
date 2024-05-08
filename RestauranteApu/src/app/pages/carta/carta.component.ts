import { Component, OnInit } from '@angular/core';
import { CoctelesInterface } from '../../shared/interfaces/cocteles-interface';
import { CocktailServiceService } from '../../shared/services/cocktail-service.service';
import { PlatoServiceService } from '../../shared/services/plato-service.service';
import { CartaInterface, Plato } from '../../shared/interfaces/carta-interface';
import { NavCartaComponent } from './nav-carta/nav-carta.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [NavCartaComponent, RouterLink],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css',
})
export class CartaComponent implements OnInit {
  cocteles: CoctelesInterface = { drinks: [] };
  carta!: CartaInterface;
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

}
