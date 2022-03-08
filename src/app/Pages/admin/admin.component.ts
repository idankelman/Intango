import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/Services/requests.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  response:String = "placeholder";

  constructor(private Requester:RequestsService) { }

  ngOnInit(): void {
    this.Requester.getData().subscribe(
      (data)=>{
        console.log(data);
      }
    );
  }

  getMessage()
  {
    this.Requester.getData().subscribe((data)=>{this.response=JSON.stringify(data)});
    return "get World";
  }

  sendMessage()
  {
    return "Send World";
  }

  deleteMessage(){
    return "Delete Message";
  }
}
