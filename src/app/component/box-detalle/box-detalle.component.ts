import { Component, OnInit } from '@angular/core';
import { DataBaseService} from '../../service/data-base.service';
import { DataDetallesService} from '../../service/data-detalles.service';
@Component({
  selector: 'app-box-detalle',
  templateUrl: './box-detalle.component.html',
  styleUrls: ['./box-detalle.component.css']
})
export class BoxDetalleComponent implements OnInit {

  dataBase: DataBaseService;
  name_pokemon1: String;

  constructor(service: DataBaseService) { 
    this.dataBase = service;
    this.name_pokemon1 = DataDetallesService.name_pokemon;
  }

  ngOnInit() {
  }

}
