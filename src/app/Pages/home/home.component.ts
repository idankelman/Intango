import { Component, OnChanges, OnInit } from '@angular/core';
import { WebSocketAPI } from 'src/app/WebSocketAPI';
import { Square } from 'src/app/Interfaces/Square';
import { ValidNewFormService } from 'src/app/Services/valid-new-form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //================================================================
  //                  variables
  //================================================================

  Max_: number = 0;
  webSocketAPI!: WebSocketAPI;
  Squares: Square[] = [];
  filterBy: number = 0;

  constructor(private SquareService: ValidNewFormService) {}

  ngOnInit(): void {
    this.webSocketAPI = new WebSocketAPI(this);
    this.webSocketAPI._connect();
    setTimeout(() => {
      try {
        this.createSquare(this.SquareService.newSquares);
        this.SquareService.newSquares = [];
        if (!!this.SquareService.ChangeSquare)
        {
          this.EditSquare(this.SquareService.ChangeSquare);
          this.SquareService.ChangeSquare = {} as Square;
        }
      } catch {
        console.log('Connection has not been established yet');
      }
    }, 3000);
  }

  //================================================================
  //                  WebSocket handler functions
  //================================================================

  UpVote(id: number) {
    console.log('Vote up for : ' + id);
    try {
      this.sendMessage(id);
    } catch (e) {
      console.log('Erorr communicating with the webSocket server');
    }
  }

  UpdateMax(vote: number) {
    if (vote > this.Max_) this.Max_ = vote;
  }

  connect() {
    console.log('connecting...');
    this.webSocketAPI._connect();
  }

  disconnect() {
    this.webSocketAPI._disconnect();
  }

  sendMessage(id: number) {
    this.webSocketAPI._send(id);
  }

  createSquare(square: Square[]) {
    let message = JSON.stringify({ squares: square });
    this.webSocketAPI._send(message, 'newSquare');
  }

  EditSquare(square: Square) {
    let message = JSON.stringify(square);
    this.webSocketAPI._send(message, 'EditSquare');
  }


  //================================================================
  //                unserialize the incomming data
  //================================================================

  handleMessage(message: any) {
    //[0]
    //erasing the data that was previously created

    let Squares_ = [];
    this.Squares = [];
    let newM = JSON.parse(message);

    //[1]
    //Creating a new square , and pushing it to the array
    for (let i = 0; i < newM.length; i++) {
      let square: Square = {
        id: newM[i].id,
        color: newM[i].color,
        votes: newM[i].vote,
      };

      this.UpdateMax(square.votes);
      Squares_.push(square);
      this.Squares.push(square);
    }

    this.Squares = Squares_;
    this.SquareService.updateSquares(this.Squares);
  }

  //================================================================
  //filtering
  //================================================================

  Filter()
  {
    if(this.filterBy >= 0)
      this.Squares = this.SquareService.allSquares;
    
    else 
    {
      console.log("changed")
      this.Squares = this.SquareService.allSquares.filter(square => square.votes >= this.filterBy);
    }
    
  }
}




