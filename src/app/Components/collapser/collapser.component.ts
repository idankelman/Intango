import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapser',
  templateUrl: './collapser.component.html',
  styleUrls: ['./collapser.component.css']
})
export class CollapserComponent implements OnInit {
  visable:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.visable= !this.visable
  }

}
