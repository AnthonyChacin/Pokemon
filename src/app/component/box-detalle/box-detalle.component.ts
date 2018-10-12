import { Component, OnInit } from '@angular/core';
import { DataBaseService} from '../../service/data-base.service';

@Component({
  selector: 'app-box-detalle',
  templateUrl: './box-detalle.component.html',
  styleUrls: ['./box-detalle.component.css']
})
export class BoxDetalleComponent implements OnInit {

  dataBase: DataBaseService;
  static name_pokemon: String;
  name_pokemon1: String;

  constructor(service: DataBaseService) { 
    this.dataBase = service;
    this.name_pokemon1 = BoxDetalleComponent.name_pokemon;
  }

  ngOnInit() {
  }

}
