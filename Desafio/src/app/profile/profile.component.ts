import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; 




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  getData;

 
  constructor(private http: Http ) { }

  public obj: any;

  ngOnInit() {
   
     this.http
    .get("https://randomuser.me/api/")
    .subscribe(dados => {
      //this.preencherPerfil(dados);
      this.obj = JSON.parse((dados['_body'])).results[0];
      console.log(this.obj);
      
    });

  }

}

