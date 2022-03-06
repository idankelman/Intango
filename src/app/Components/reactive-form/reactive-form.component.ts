import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Square } from 'src/app/Interfaces/Square';
import { ValidNewFormService } from 'src/app/Services/valid-new-form.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  square: Square;
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private SquareService: ValidNewFormService
  ) {
    this.square = {
      id: -1,
      color: '#fff',
      votes: 0,
    };
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id !== null) {
      console.log('the id :' + id);
      this.square = this.SquareService.getSquare(parseInt(id));
      console.log(this.square);
    }
  }
}
