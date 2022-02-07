
//================================================================
//                          imports :
//================================================================


import { Component, OnInit ,Input,Output} from '@angular/core';
import { EventEmitter } from '@angular/core';




  //================================================================
  //                      the cusotom elem :
  //================================================================

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})


  //================================================================
  //                            Cycle :
  //================================================================

export class SquareComponent implements OnInit {

  constructor() { }


  //================================================================
  //                            Functions :
  //================================================================

  BtnClick(){
    console.log("Square Clicked");
  }


  ngOnInit(): void {
  }

}
