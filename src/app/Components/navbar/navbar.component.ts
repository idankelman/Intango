import { Component, OnInit } from '@angular/core';
// import { findIndex } from 'rxjs';
import * as $ from 'jquery';

import { ValidNewFormService } from 'src/app/Services/valid-new-form.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Query : string = "";
  
  constructor(private SquareService:ValidNewFormService) { 
  }

  ngOnInit(): void {
    // $("#simple-modal").hide();

  }

  MakeQuery(){
    let term = this.Query.toUpperCase()
    let Squares = this.SquareService.allSquares;
    let Queries = Squares.filter(square=>square.color.indexOf(term)>-1);
    this.SquareService.updateQuery(term.length==0?Squares:Queries);
    // $(".modal").modal({});
  }

  Search()
  {
    $(".Wrapper").show();
  }


}
