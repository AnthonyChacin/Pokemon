import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataDetallesService {

  static name_pokemon: String;
  constructor() {
    DataDetallesService.name_pokemon = 'name_pokemon';
  }
}
