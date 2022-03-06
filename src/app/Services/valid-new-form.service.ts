import { Injectable } from '@angular/core';
import { SquareComponent } from '../Components/square/square.component';
import { Square } from '../Interfaces/Square';

@Injectable({
  providedIn: 'root',
})
export class ValidNewFormService {
  //================================================================
  //                  variables
  //================================================================

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
  }
}
