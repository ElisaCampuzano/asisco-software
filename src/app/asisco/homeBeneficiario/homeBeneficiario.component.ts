import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionServiciosService } from '../gestion-servicios.service';

@Component({
  selector: 'app-home-beneficiario',
  templateUrl: './homeBeneficiario.component.html',
  styleUrls: ['./homeBeneficiario.component.css']
})
export class HomeBeneficiarioComponent implements OnInit {

  userName: any;

  constructor(private servicios: GestionServiciosService,
    private router: Router) { }

  ngOnInit(): void {
    this.userName = this.servicios.userName;
  }

  irARegistro(){
    this.router.navigate(["/registro"]);
  }
}
