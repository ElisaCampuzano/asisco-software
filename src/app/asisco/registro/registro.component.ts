import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionServiciosService } from '../gestion-servicios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nombre: any;
  apellidos: any;
  celular: any;
  direccion: any;
  fechaNacimiento: any;
  ocupacion: any;
  email: any;
  contrasena: any;

  constructor(private servicios: GestionServiciosService,
    private router: Router) { }

  ngOnInit(): void {
  }

  registrarse(){
    this.nombre = (document.getElementById("nombre") as HTMLInputElement).value; 
    this.apellidos = (document.getElementById("apellidos") as HTMLInputElement).value; 
    this.celular = (document.getElementById("celular") as HTMLInputElement).value; 
    this.direccion = (document.getElementById("direccion") as HTMLInputElement).value; 
    this.fechaNacimiento = (document.getElementById("fechaNacimiento") as HTMLInputElement).value; 
    this.ocupacion = (document.getElementById("ocupacion") as HTMLInputElement).value; 
    this.email = (document.getElementById("email") as HTMLInputElement).value; 
    this.contrasena = (document.getElementById("contrasena") as HTMLInputElement).value; 
    
    let datos = {
      "userId": 0,
      "name": this.nombre,
      "lastName": this.apellidos,
      "address": this.direccion,
      "mobilePhone": this.celular,
      "userBirthDate": this.fechaNacimiento,
      "email": this.email,
      "rolId": 1,
      "personType": "string",
      "documentType": "string",
      "documentNumber": "string",
      "password": this.contrasena,
      "state": "string",
      "chats": [],
      "notifications": [],
      "diseaseDescription": "string",
      "fatherName": "string",
      "motherName": "string",
      "fatherPhone": "string",
      "motherPhone": "string",
      "sponsorUserId" : 4
    };
    this.servicios.Registro(JSON.stringify(datos)).subscribe((respuesta)=>{
      console.log("Usuario registrado");
      console.log(respuesta[respuesta.length-1]);
      let datosRegistro = respuesta[respuesta.length-1];
      this.nombre = datosRegistro.name;
      this.servicios.userName = this.nombre;
      this.router.navigate(["/homeBeneficiario"]);
    });
    
  }
}
