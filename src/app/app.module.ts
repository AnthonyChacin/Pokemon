import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeNavigationComponent } from './navigation/home-navigation/home-navigation.component';
import { HomeComponent } from './view/home/home.component';
import { DetalleComponent } from './view/detalle/detalle.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DashboardComponentComponent } from './component/dashboard-component/dashboard-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeNavigationComponent,
    HomeComponent,
    DetalleComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    DashboardComponentComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
