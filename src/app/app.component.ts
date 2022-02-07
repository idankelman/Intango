import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  Max_:number = 0;
  titles:string = 'Client';
  
  UpVote(){
    console.log("Vote up ")
    // this.Vote++;
  }

  UpdateMax(vote:number){
    if(vote>this.Max_)
      this.Max_=vote;

    console.log('Updating max : '+ this.Max_)


  }

}
