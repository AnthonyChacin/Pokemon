import { Component, OnInit } from '@angular/core';
import { DataBaseService} from '../../service/data-base.service';
import { DataDetallesService} from '../../service/data-detalles.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-box-detalle',
  templateUrl: './box-detalle.component.html',
  styleUrls: ['./box-detalle.component.css']
})
export class BoxDetalleComponent implements OnInit {

  dataBase: DataBaseService;
  name_pokemon1: String;
  pokemon: any;

  constructor(private service: DataBaseService, private route: ActivatedRoute) { 
    this.dataBase = service;
    this.name_pokemon1 = DataDetallesService.name_pokemon;
  }

  ngOnInit() {
    let aux;
    aux = this.route.snapshot.paramMap.get('id');
    this.pokemon = this.service.getById(aux);
    console.log(this.pokemon);
  }

}
