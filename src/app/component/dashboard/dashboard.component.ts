import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/service/data-base.service';
import { BoxDetalleComponent} from 'src/app/component/box-detalle/box-detalle.component'
import { DataDetallesService} from 'src/app/service/data-detalles.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataBase: DataBaseService;
  boxDetalle: BoxDetalleComponent;

  constructor(service: DataBaseService, private router: Router) {
    this.dataBase = service;
  }

  onShowDetalle(name_pokemon: String){
    this.router.navigate([`/detalle/${name_pokemon}`]);
  }


  ngOnInit() {
  }

}
