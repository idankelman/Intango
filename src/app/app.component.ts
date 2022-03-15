//================================================================
//                        Imports
//================================================================

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //================================================================
  //                  variables
  //================================================================

  
  constructor() {}

  ngOnInit(): void {
    
    let date = new Date();
    let time  =date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    console.log(time)

    localStorage.setItem('time',time);

    //setting up the socket connection
  }
}