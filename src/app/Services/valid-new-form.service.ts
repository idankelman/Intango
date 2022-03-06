import { Injectable } from '@angular/core';
import { Square } from '../Interfaces/Square';

@Injectable({
  providedIn: 'root'
})
export class ValidNewFormService {
  //================================================================
  //                  variables
  //================================================================

  allSquares :Square[] = [];
  newSquares: Square[]= []; 

  constructor() { }


  //================================================================
  //                  Functions
  //================================================================

  updateSquares(Squares:Square[]){
    this.allSquares = Squares;
  }

  getSquare(id:number):Square{
    console.log("the given id is :"+id);
    let Square = this.allSquares.find(square => square.id == id);
    return Square==undefined?{id:-1,color:"#fff",votes:0}:Square;
  }

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
