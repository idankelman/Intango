import { Injectable } from '@angular/core';
import { Square } from '../Interfaces/Square';

@Injectable({
  providedIn: 'root'
})
export class ValidNewFormService {
  //================================================================
  //                  variables
  //================================================================

  newSquares: Square[]= []; 

  constructor() { }



  //================================================================
  //                  Functions
  //================================================================

 Validate(vote:number ,Color:string){
  let newSquare:Square ={
    id: Math.floor(Math.random()*1000),
    color:Color,
    votes:vote
  }
  this.newSquares.push(newSquare);
    
 }

 Authenticate(){
  return !!this.newSquares;
 }
}
