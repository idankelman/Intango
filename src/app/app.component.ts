//================================================================
//                        Imports
//================================================================

import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //================================================================
  //                  variables
  //================================================================

  
  constructor(private cookie:CookieService) {}

  ngOnInit(): void {
    let date = new Date();
    let time = date.setTime(date.getTime() + (5000));
    this.cookie.set('loggedIn', "Still Logged In " , {expires: new Date(time)});
    //setting up the socket connection
  }
}