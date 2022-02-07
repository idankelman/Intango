
//================================================================
//                          imports :
//================================================================


import { Component, OnInit ,Input,Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Square } from 'src/app/Interfaces/Square';




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

  //================================================================
  //                            variables :
  //================================================================


  @Input() Square_:Square 
  @Output() btnClick= new EventEmitter();

  SquareWidth:number = 200;
  BarWidth:number = 50;
  // BarWidth;
  MaxWidth:number = 200;


  constructor() {



    //=====================    init variables   =====================
    this.Square_ = {
      id : -1,
      color:"#fff",
      votes: 0
    };
    // this.BarWidth= this.CalcBar(this.Square_.votes)

   }


  //================================================================
  //                            Functions :
  //================================================================

  onClick(){

    //[1] Update Votes
    console.log("Square Clicked");
    this.btnClick.emit();
    this.Square_.votes+=1

    //[2] Update MaxVotes 


    //[3] Update Server


    //[4] Update Bar Width 
    this.BarWidth = this.CalcBar(this.Square_.votes) 
    console.log(this.BarWidth)

  }

  CalcBar(Votes:number){
    return  Math.floor(this.SquareWidth*(Votes/this.MaxWidth));
  }


  ngOnInit(): void {
  }

}
