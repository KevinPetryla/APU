import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlatoInterface } from '../interfaces/plato-interface';

@Injectable({
  providedIn: 'root'
})
export class APICartaService {

  constructor(private http: HttpClient) { }

  getSeccion(seccion: string): Observable<PlatoInterface>{
    return this.http.get<PlatoInterface>('./assets/data/APICarta/' + seccion + '.json')
  }
}
