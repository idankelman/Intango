import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Square } from 'src/app/Interfaces/Square';
import { ValidNewFormService } from 'src/app/Services/valid-new-form.service';
import { Router } from '@angular/router';

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
  EditSquare!: FormGroup;

  //constructor
  //================================================================

  constructor(
    private route: ActivatedRoute,
    private SquareService: ValidNewFormService,
    private router: Router)
    
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
    if (id !== null) {
      this.square = this.SquareService.getSquare(parseInt(id));
    }


    //creating new form controls :
    //=======================================

    let Color = new FormControl(this.square.color);
    let Votes = new FormControl(this.square.votes);
    this.EditSquare = new FormGroup({
      Color: Color,
      Votes: Votes,
    });
  }


  ChangeVote()
  {
    this.square.votes = this.EditSquare.value.Votes;
  }
  
  ChangeColor()
  {
    let tmp = this.EditSquare.value.Color;
    if (tmp.length > 0 && tmp.charAt(0) === '#') {
      while (tmp.length < 7) {
        tmp += 'F';
      }
    }
    this.square.color = tmp;
  }


  MakeChanges(form: any) {
    this.SquareService.Edit(
      this.square.id,
      this.square.votes,
      this.square.color
    );
    console.log(form);
    this.router.navigate(['/Home']);
  }

  Cancel()
  {
    this.router.navigate(['/Home']);
    
  }
}
