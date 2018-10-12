import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: AppComponent }
        ], component: AppComponent
    }

]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
