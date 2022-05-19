import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBeneficiarioComponent } from './asisco/homeBeneficiario/homeBeneficiario.component';
import { InicioComponent } from './asisco/inicio/inicio.component';
import { LoginComponent } from './asisco/login/login.component';
import { RegistroComponent } from './asisco/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'homeBeneficiario',
    component: HomeBeneficiarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
