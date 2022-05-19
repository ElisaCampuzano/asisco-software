import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsiscoRoutingModule } from './asisco-routing.routing';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeBeneficiarioComponent } from './homeBeneficiario/homeBeneficiario.component';


@NgModule({
  declarations: [
    LoginComponent,
    InicioComponent,
    RegistroComponent,
    HomeBeneficiarioComponent
  ],
  imports: [
    CommonModule,
    AsiscoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AsiscoModule { }
