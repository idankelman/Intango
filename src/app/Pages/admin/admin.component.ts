import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/Services/requests.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  response:String = "placeholder";
  // Currencies:String[] = ['USD','EUR','GBP'];
  // Value : number []  =[];
  Content:any = {};
  keys : string[] = [];


  constructor(private Requester:RequestsService) { }

  ngOnInit(): void {
    this.Requester.getData().subscribe(
      (data)=>{
        console.log(data);
        this.parseValue(data);
      }
    );
  }

  getMessage()
  {
    this.Requester.getData().subscribe((data)=>{this.parseValue(data)});
    return "get World";
  }

  sendMessage()
  {
    return "Send World";
  }

  deleteMessage(){
    return "Delete Message";
  }

  parseValue(data:any){

    this.Content = {
      "USD":parseInt(data.bpi['USD'].rate),
      "EUR":parseInt(data.bpi['EUR'].rate),
      "GBP":parseInt(data.bpi['GBP'].rate)
    }
    this.keys = Object.keys(this.Content);
  }
}
