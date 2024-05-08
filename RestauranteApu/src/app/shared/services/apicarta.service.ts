import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {SeccionInterface } from '../interfaces/seccion-interface';
import { PlatoInterface } from '../interfaces/plato-interface';

@Injectable({
  providedIn: 'root',
})
export class APICartaService {
  constructor(private http: HttpClient) {}

  private idPlato !: number

  getSeccion(seccion: string): Observable<SeccionInterface> {
    return this.http.get<SeccionInterface>(
      './assets/data/APISecciones/' + seccion + '.json'
    );
  }

  sendPlato(idPlato : number){
    this.idPlato = idPlato
  }

  getPlato(): Observable<PlatoInterface>{
    return this.http.get<PlatoInterface>('./assets/data/APISecciones/APIPlatos/' + this.idPlato + '.json');
  }
}
