import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { HomeComponent } from './Pages/home/home.component';

export class WebSocketAPI {
    webSocketEndPoint: string = 'http://localhost:8080/ws';
    topic: string = "/topic/greetings";
    stompClient: any;
    HomeComponent: HomeComponent;

    constructor(HomeComponent: HomeComponent){
        this.HomeComponent = HomeComponent;
    }

    _connect() {
        console.log("Initialize WebSocket Connection");
        let ws = new SockJS(this.webSocketEndPoint);
        this.stompClient = Stomp.over(ws);
        const _this = this;
        _this.stompClient.connect({}, function (frame:any) {
            _this.stompClient.subscribe(_this.topic, function (sdkEvent:any) {
                _this.onMessageReceived(sdkEvent);
            });
            //_this.stompClient.reconnect_delay = 2000;
        }, this.errorCallBack);
    };

    _disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log("Disconnected");
    }

    // on error, schedule a reconnection attempt
    errorCallBack(error:any) {
        console.log("errorCallBack -> " + error)
        setTimeout(() => {
            this._connect();
        }, 5000);
    }

 /**
  * Send message to sever via web socket
  * @param {*} message 
  */
    _send(message:any, path:string = "hello") {
        this.stompClient.send("/app/"+path, {}, message);
    }
    
    onMessageReceived(message:any) {
        this.HomeComponent.handleMessage(message.body);
    }
}