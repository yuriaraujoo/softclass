import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; 
import { HttpService } from '../http.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [HttpService]
})
export class ProfileComponent implements OnInit {

  getData;

  constructor(private http: HttpService ) { }

  onTestGet() {
    this.http.getCurrentTime()
    .subscribe(
       data => this.getData = JSON.stringify(data),
       error => alert(error),
       () => console.log("API ok."))
    }

  ngOnInit() {
   

// this.http.get("//randomuser.me/api/");
//populaDadosForm("//randomuser.me/api/")
    
    
    }
  }



 
    

