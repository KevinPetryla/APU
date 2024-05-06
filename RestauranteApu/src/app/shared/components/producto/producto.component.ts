import { Component, OnInit } from '@angular/core';
import { PlatoServiceService } from '../../services/plato-service.service';
import { ActivatedRoute } from '@angular/router';
import { CartaComponent } from '../../../pages/carta/carta.component';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CartaComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent implements OnInit {
  seccion!: number;
  idPlato!: number;
  plato!: {};

  constructor(
    private platoData: PlatoServiceService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {

  }

 }
