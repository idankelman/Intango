import { Component, EventEmitter, OnInit ,Output} from '@angular/core';
import { Router } from '@angular/router';
import { Square } from 'src/app/Interfaces/Square';
import { ValidNewFormService } from 'src/app/Services/valid-new-form.service';

@Component({
  selector: 'app-form-new',
  templateUrl: './form-new.component.html',
  styleUrls: ['./form-new.component.css'],
})

export class FormNewComponent implements OnInit {
  square: Square;
  name: string = '';
  Color: string = '';
  Votes: number = 0;

  constructor(private router:Router , private Auth:ValidNewFormService) {
    this.square = {
      id: -1,
      color: '#fff',
      votes: 0,
    };
  }

  ngOnInit(): void {}

  ChangeName() {
    // console.log('ChangeName');
    let t = this.name;
  }
  ChangeColor() {
    // console.log('ChangeColor');
    let tmp = this.Color;
    if (tmp.length > 0 && tmp.charAt(0) === '#') {
      while (tmp.length < 7) {
        tmp += 'F';
      }
    }
    this.square.color = tmp;
    // console.log(tmp);
  }
  ChangeVote() {
    // console.log('ChangeVote');
    if (this.Votes >= 0) {
      this.square.votes = this.Votes;
    }
  }

  onSubmit(form: any) {
    console.log(form);
    this.Auth.Validate(this.Votes,this.Color);

    this.router.navigate(['/Home']);
  }
}
