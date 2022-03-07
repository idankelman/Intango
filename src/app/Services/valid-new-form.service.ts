import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { Square } from '../Interfaces/Square';


@Injectable({
  providedIn: 'root',
})
export class ValidNewFormService {
  //================================================================
  //                  variables
  //================================================================
  obsr = new BehaviorSubject<Square[]>([]);
  allSquares: Square[] = [];
  newSquares: Square[] = [];
  QuerySquares: Square[] = [];
  ChangeSquare!: Square;

  constructor() {}

  //================================================================
  //                  Functions
  //================================================================

  updateSquares(Squares: Square[]) {
    this.allSquares = Squares;
  }

  getSquare(id: number): Square {
    // console.log("the given id is :"+id);
    let Square = this.allSquares.find((square) => square.id == id);
    return Square == undefined ? { id: -1, color: '#fff', votes: 0 } : Square;
  }

  Validate(id: number, vote: number, Color: string) {

    if (id < 0) id = Math.floor(Math.random() * 1000);
    let tmp = Color;
    if (tmp.length > 0 && tmp.charAt(0) === '#')
      while (tmp.length < 7) 
        tmp += 'F';

    let newSquare: Square = {
      id: id,
      color: tmp.toUpperCase(),
      votes: vote,
    };

    this.newSquares.push(newSquare);
    
  }

  Edit(id: number, vote: number, Color: string) {
    let index = this.allSquares.findIndex((square) => square.id == id);
    if (index < 0) return;

    this.ChangeSquare = {
      id: id,
      color: Color.toUpperCase(),
      votes: vote,
    };
  }

  Authenticate() {
    return !!this.newSquares;
  }

  updateQuery(Queries:Square[])
  {
    this.QuerySquares = [];
    if(Queries.length>0)
      this.QuerySquares = Queries;    

    this.obsr.next(this.QuerySquares);
    console.log(this.QuerySquares);
    // console.log("updated");
  }

  getQueries():Observable<Square[]>{
    return this.obsr.asObservable();
  }
}
