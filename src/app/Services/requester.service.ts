import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Square } from '../Interfaces/Square';

@Injectable({
  providedIn: 'root',
})
export class RequesterService {
  Squares: Square[] = [
    {
      id: -1,
      color: '#42EFEE',
      votes: 0,
    },
  ];

  //================================================================
  // updateService(Squares_: Square[]) {
  //   console.log("Squares inside of the observable : \n" + Squares_);
  //   this.Squares = Squares_;
  // }


  constructor() {}

  updateService() {
    
    this.Squares.push({
      id: -1,
      color: '#42EFEE',
      votes: 0,
    });
  }

  getSquares(): Observable<Square[]> {
    const squares = of(this.Squares);
    return squares;
  }

}
