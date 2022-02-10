import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Square } from '../Interfaces/Square';

@Injectable({
  providedIn: 'root',
})
export class RequesterService {
  Squares: Square[] = [
    {
      id: 0,
      color: 'red',
      votes: 0,
    },
    {
      id: 1,
      color: 'blue',
      votes: 0,
    },
    {
      id: 2,
      color: 'white',
      votes: 0,
    },
    {
      id: 3,
      color: 'white',
      votes: 0,
    },
    {
      id: 4,
      color: 'green',
      votes: 0,
    },
    {
      id: 5,
      color: 'white',
      votes: 0,
    }
    ,
    {
      id: 6,
      color: 'white',
      votes: 0,
    }
  ];

  //================================================================
  updateService(Squares_: Square[]) {
    // console.log("Squares inside of the observable : \n" + Squares_);
    if(Squares_ == undefined)
      return;
    this.Squares = Squares_;
  }


  constructor() {}

  // updateService() {
    
  //   this.Squares.push({
  //     id: -1,
  //     color: '#42EFEE',
  //     votes: 0,
  //   });
  // }

  getSquares(): Observable<Square[]> {
    // const squares = of(this.Squares);
    return of(this.Squares);
  }

}
