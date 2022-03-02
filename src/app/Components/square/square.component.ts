
//================================================================
//                          imports :
//================================================================


import { Component, OnInit ,Input,Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  @Input()  MaxVote:number = 200;
  @Output()  VoteChange: EventEmitter<number> =   new EventEmitter();
  @Output() btnClick: EventEmitter<number> = new EventEmitter();

  SquareWidth:number = 200;
  BarWidth:number = 50;
  // BarWidth;



  constructor(private route:ActivatedRoute) {
    //=====================    init variables   =====================
    this.Square_ = {
      id : -1,
      color:"#fff",
      votes: 0
    };
   }


  //================================================================
  //                            Functions :
  //================================================================

  onClick(){

    //[1] Update Votes
    console.log("Square Clicked");
    // this.btnClick.emit(this.Square_.votes);
    // this.Square_.votes+=1

    //[2] Update MaxVotes 

    this.VoteChange.emit(this.Square_.votes+1);

    //[3] Update Server

    this.btnClick.emit(this.Square_.id);

    //[4] Update Bar Width 
    //this.BarWidth = this.CalcBar(this.Square_.votes) 


  }

  CalcBar(Votes:number){
    if(this.MaxVote<Votes)
      this.MaxVote= Votes
    // console.log(this.MaxVote + "  -- " + Votes)
    return (this.MaxVote==0? 0 : Math.floor(this.SquareWidth*(Votes/this.MaxVote)));
  }


  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')!=null)
      console.log(this.route.snapshot.paramMap.get('id'));
    this.BarWidth= this.CalcBar(this.Square_.votes)
  }

}
