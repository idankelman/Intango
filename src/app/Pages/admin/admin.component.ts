import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  time:String = "logged in at : ";

  constructor() { }

  ngOnInit(): void {
    let info = localStorage.getItem('time');
    if(info){
      this.time += info;
    }
  }

  Reset(){
    // localStorage.clear();
    // localStorage.removeItem('time');
    
  }

}
