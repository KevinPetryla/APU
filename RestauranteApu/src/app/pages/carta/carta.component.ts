import { Component, OnInit } from '@angular/core';
import { CoctelesInterface } from '../../shared/interfaces/cocteles-interface';
import { CocktailServiceService } from '../../shared/services/cocktail-service.service';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css'
})
export class CartaComponent implements OnInit{
  cocteles : CoctelesInterface = {drinks : []}
  constructor(private dataCocktail: CocktailServiceService){}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.dataCocktail.getData().subscribe(
      (next: CoctelesInterface)=>{
        this.cocteles = next
      },(error) => {
        console.log("ERROR AL CARGAR API");
      },() => {
        console.log("Busqueda realizada");
      }
    )
  }
}
