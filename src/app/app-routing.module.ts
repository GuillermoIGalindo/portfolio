import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContactameComponent } from './contactame/contactame.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contactame', component: ContactameComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/inicio' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
