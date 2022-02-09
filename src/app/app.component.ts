import { Component } from '@angular/core';
import { WebSocketAPI } from './WebSocketAPI';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  Max_:number = 0;
  webSocketAPI:WebSocketAPI;
  name: string ='idan';
  greeting:any;

  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(new AppComponent());
  }

  constructor(){
    // this.webSocketAPI = new WebSocketAPI(new AppComponent());
  }
  
  UpVote(id:number){
    console.log("Vote up for : " + id);
    // this.Vote++;
  }

  UpdateMax(vote:number){
    if(vote>this.Max_)
      this.Max_=vote;

    console.log('Updating max : '+ this.Max_)
  }

  connect(){
    console.log("connecting...")
    console.log("Connecting to WebSocket")
    console.log(this.webSocketAPI)
    this.webSocketAPI._connect();
  }

  disconnect(){
    this.webSocketAPI._disconnect();
  }

  sendMessage(){
    this.webSocketAPI._send(this.Max_);
  }

  handleMessage(message:any){
    this.greeting = message;
  }
}
