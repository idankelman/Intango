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

 Validate(vote:number ,Color:string,id:number){
   if(id<0)
    id = Math.floor(Math.random()*1000)
  let newSquare:Square ={
    id: id,
    color:Color.toUpperCase(),
    votes:vote
  }
  this.newSquares.push(newSquare);
    
 }

 Authenticate(){
  return !!this.newSquares;
 }
}
