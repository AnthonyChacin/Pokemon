import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeNavigationComponent } from './navigation/home-navigation/home-navigation.component';
import { HomeComponent } from './view/home/home.component';
import { DetalleComponent } from './view/detalle/detalle.component';
const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent }
        ], component: HomeNavigationComponent
    },
    {
        path: 'home',
        children: [
            { path: 'home', redirectTo: '/home/detalle', pathMatch: 'full' },
            { path: 'detalle', component: DetalleComponent }
        ], component: HomeNavigationComponent
    }

]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
