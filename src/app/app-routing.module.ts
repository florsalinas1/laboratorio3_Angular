import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },

  
  {
    path: "lista-usuarios",
    component: ListaUsuariosComponent
  },

  {
    path: "",
    component: MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
