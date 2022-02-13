//================================================================
//                        Imports
//================================================================

import { Component } from '@angular/core';
import { WebSocketAPI } from './WebSocketAPI';
import { Square } from './Interfaces/Square';

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
  Squares: Square[] = [];

  constructor() {}

  ngOnInit(): void {
    //setting up the socket connection

    this.webSocketAPI = new WebSocketAPI(this);
    this.webSocketAPI._connect();
    setTimeout(() => {
      try {this.sendMessage(-1);} catch {console.log('Connection has not been established yet');}}, 3000);
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
  }
}
