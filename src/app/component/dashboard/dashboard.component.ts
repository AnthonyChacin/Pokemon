import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/service/data-base.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataBase: DataBaseService;

  constructor(service:DataBaseService) {
    this.dataBase = service;
   }

  ngOnInit() {
  }

}
