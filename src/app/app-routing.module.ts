import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarreraPage } from './carrera/carrera.page';
import { ProyectoPage } from './proyecto/proyecto.page';

const routes: Routes = [
  { path: '', loadChildren: './mapa/mapa.module#MapaPageModule' },
  { path: 'carrera', component: CarreraPage },
  { path: 'proyecto', component: ProyectoPage },
  { path: 'carrera/:id', component: CarreraPage },
  { path: 'proyecto/:id', component: ProyectoPage },  { path: 'conoce', loadChildren: './conoce/conoce.module#ConocePageModule' },
  { path: 'descripcion', loadChildren: './descripcion/descripcion.module#DescripcionPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
