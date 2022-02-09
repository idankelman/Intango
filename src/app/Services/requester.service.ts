import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Square } from '../Interfaces/Square';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {
  Squares:Square[] =[{
    id : -1,
    color:"#42EFEE",
    votes: 0
  }];

  //================================================================
  RequestItem(Squares:Square[]):Observable<any>{
    this.Squares = Squares;
    return new Observable(observer => {
      observer.next(this.Squares);
    });
  }

  getSquares():Observable<Square[]>{
    const squares = of(this.Squares);
    return squares;
  }

  constructor() { }
}
