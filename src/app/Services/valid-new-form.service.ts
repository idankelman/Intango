import { Injectable } from '@angular/core';
import { Square } from '../Interfaces/Square';

@Injectable({
  providedIn: 'root'
})
export class ValidNewFormService {
  //================================================================
  //                  variables
  //================================================================

  newSq: Square[]= []; 

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
  this.newSq.push(newSquare);
    
 }

 Authenticate(){
  return !!this.newSq;
 }
}
