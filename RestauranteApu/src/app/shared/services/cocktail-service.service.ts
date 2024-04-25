import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoctelesInterface } from '../interfaces/cocteles-interface';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  constructor(private http: HttpClient) { }

  getData():Observable<CoctelesInterface> {
    return this.http.get<CoctelesInterface>("./assets/data/Cocteles.json")
  }
}
