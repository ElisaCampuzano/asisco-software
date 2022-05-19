import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionServiciosService } from '../gestion-servicios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  contrasena: any;
  name: any;
  mensajeError: any = '';

  constructor(private servicios: GestionServiciosService,
    private router: Router) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    this.email = (document.getElementById("email") as HTMLInputElement).value; 
    this.contrasena = (document.getElementById("contrasena") as HTMLInputElement).value; 
    
    let datos = {
      "email": this.email,
      "password": this.contrasena
    }
    this.servicios.Login(JSON.stringify(datos)).subscribe((respuesta)=>{
      if(respuesta.status == 'success'){
        this.mensajeError = '';
        let datos = JSON.parse(respuesta.data);
        this.name = datos.Name;
        this.servicios.userName = this.name;
        this.router.navigate(["/homeBeneficiario"]);
      }
      else{
        this.mensajeError = respuesta.message;
      }
    });
    
  }

  irARegistro(){
    this.router.navigate(["/registro"]);
  }
}
