import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Asisco software';

  constructor(private router: Router,){

  }
  ngOnInit() {
    // this.router.navigate(['inicio']);
  }

}
