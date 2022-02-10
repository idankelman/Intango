//================================================================
//                        Imports
//================================================================

import { Component } from '@angular/core';
import { WebSocketAPI } from './WebSocketAPI';
import { Square } from './Interfaces/Square';
import { RequesterService } from './Services/requester.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //================================================================
  //                  variables
  //================================================================

  Max_: number = 0;
  webSocketAPI!: WebSocketAPI;
  // SquareService!: RequesterService;
  title: string = 'idan';
  Squares: Square[] = [];

  constructor(private SquareService:RequesterService) {}

  ngOnInit(): void {
    //setting up the socket connection
    this.webSocketAPI = new WebSocketAPI(this);
    this.webSocketAPI._connect();

    // this.SquareService = new RequesterService();
    
    //setting the observable on the squares array
    // this.SquareService.getSquares().subscribe({
    //   next: (data) => {
        
    //     console.log(data);
    //     // this.Squares = data;

    //   },
    //   error: (error) => console.log(error),
    //   complete: () => {console.log('The squares are ready');console.log(this.Squares);},
    // });


    // this.sendMessage(-1);

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

    console.log('Updating max : ' + this.Max_);
  }

  connect() {
    console.log('connecting...');
    console.log('Connecting to WebSocket');
    console.log(this.webSocketAPI);
    this.webSocketAPI._connect();
  }

  disconnect() {
    this.webSocketAPI._disconnect();
  }

  sendMessage(id: number) {
    this.webSocketAPI._send(id);
  }

  //================================================================
  //                unserialize the incomming data
  //================================================================

  handleMessage(message: any) {
    //[0]
    //erasing the data that was previously created

    let Squares_ = [];
    this.Squares= [];
    let newM = JSON.parse(message);
    console.log(newM);

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

    // console.log(Squares_);
    console.log(Squares_);
    this.Squares = Squares_;
    
    this.SquareService.updateService(Squares_);
    // this.SquareService.Squares = Squares_;
    console.log('these are the squares after message: ');
    console.log(this.Squares);
    this.title = JSON.stringify(this.Squares);
    // console.log(this.Squares[0]);
  }
}
