import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*   import 'rxjs/add/operator/map';
      private http: Http
    dadosPerfil(dadosPerfil){

      this.http.get(`//randomuser.me/api/${dadosPerfil}/json`)
      .map(dados => dados.json())
      .subscribe(dados => console.log(dados));
    }
    */
   }
 
    

