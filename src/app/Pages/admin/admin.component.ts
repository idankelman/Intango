import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private cookie:CookieService) { }

  ngOnInit(): void {
    
    // console.log('admin');
  }

  check(){
    
    console.log(this.cookie.get('loggedIn'));
  }

}
