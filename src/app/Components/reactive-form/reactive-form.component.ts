import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Square } from 'src/app/Interfaces/Square';
import { ValidNewFormService } from 'src/app/Services/valid-new-form.service';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  

  //variables
  //================================================================
  square: Square;
  id: number = 0;
  EditSquare!:FormGroup


  //constructor
  //================================================================

  constructor(
    private route: ActivatedRoute,
    private SquareService: ValidNewFormService)
  
  {
    this.square = {
      id: -1,
      color: '#fff',
      votes: 0,
    };
  }

  ngOnInit(): void {

    //setting the right square to the form :
    //=======================================
    
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id !== null) {
      console.log('the id :' + id);
      this.square = this.SquareService.getSquare(parseInt(id));
      console.log(this.square);
    
    }
        //creating new form controls : 
    //=======================================

    let Color = new FormControl()
    let Votes = new FormControl()
    this.EditSquare = new FormGroup({
      Color: Color,
      Votes: Votes
    });

  }
}
