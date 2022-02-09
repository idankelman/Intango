import { Component } from '@angular/core';
import { WebSocketAPI } from './WebSocketAPI';
import { Square } from './Interfaces/Square';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Max_: number = 0;
  webSocketAPI: WebSocketAPI;
  name: string = 'idan';
  Squares: Square[] = [];

  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(new AppComponent());
  }

  constructor() {
    // this.webSocketAPI = new WebSocketAPI(new AppComponent());
  }

  UpVote(id: number) {
    console.log('Vote up for : ' + id);
    this.sendMessage(id);
    // this.Vote++;
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

  handleMessage(message: any) {
    this.Squares = [];
    let newM = JSON.parse(message);
    console.log(newM);
    for (let i = 0; i < newM.length; i++) {
      let square: Square = {
        id: newM[i].id,
        color: newM[i].color,
        votes: newM[i].vote,
      };
      this.UpdateMax(square.votes);
      this.Squares.push(square);
    }

    // this.Squares = message;
    console.log(this.Squares);
    console.log(this.Squares[0]);
  }
}
