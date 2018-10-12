import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/service/data-base.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DataBaseService]
})
export class DashboardComponent implements OnInit {

  constructor(service:DataBaseService) { }

  ngOnInit() {
  }

}
