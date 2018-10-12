import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/service/data-base.service';
import { BoxDetalleComponent} from 'src/app/component/box-detalle/box-detalle.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataBase: DataBaseService;

  constructor(service: DataBaseService) {
    this.dataBase = service;
  }

  onShowDetalle(name_pokemon: String){
    BoxDetalleComponent.name_pokemon = name_pokemon;
  }


  ngOnInit() {
  }

}
