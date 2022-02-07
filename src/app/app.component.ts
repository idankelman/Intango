import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  // Vote:number = 1;

  title = 'Client';
  
  UpVote(){
    console.log("Vote up")
    // this.Vote++;
  }

}
