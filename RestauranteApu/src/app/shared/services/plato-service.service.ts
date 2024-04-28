import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartaInterface } from '../interfaces/carta-interface';

@Injectable({
  providedIn: 'root',
})
export class PlatoServiceService {
  constructor(private http: HttpClient) {}

  getData(): Observable<CartaInterface> {
    return this.http.get<CartaInterface>('./assets/data/CartaComida.json');
  }
}
