import { Component, OnInit } from '@angular/core';
import { Square } from 'src/app/Interfaces/Square';
import { ValidNewFormService } from 'src/app/Services/valid-new-form.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  Squares:Square[] = [];
  constructor(private SquareService:ValidNewFormService) { }

  ngOnInit(): void {
    this.Squares = this.SquareService.allSquares;
  }

}
