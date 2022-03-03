import { Injectable } from '@angular/core';
import { Square } from '../Interfaces/Square';

@Injectable({
  providedIn: 'root'
})
export class ValidNewFormService {
  //================================================================
  //                  variables
  //================================================================

  currentSquare!: Square; 

  constructor() { }



  //================================================================
  //                  Functions
  //================================================================

 Validate(vote:number ,color:string){
  this.currentSquare.color=color;
  this.currentSquare.votes=vote;
  this.currentSquare.id=Math.floor(Math.random()*1000);
 }

 Authenticate(){
  return !!this.currentSquare;
 }
}
