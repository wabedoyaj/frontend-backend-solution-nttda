import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ResumenComponent } from './resumen/resumen.component';

const routes: Routes = [
  {
    path: '',// Ruta principal que se muestra al buscar en el navegador
    component: InicioComponent// componente que se carga en esta ruta
  },
  {
    path: 'resumen', //Ruta para acceder al componente resumen
    component: ResumenComponent // componente que se carga en la ruta
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
