import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-new',
  templateUrl: './form-new.component.html',
  styleUrls: ['./form-new.component.css']
})
export class FormNewComponent implements OnInit {
  name: string = "";
  email: string = "";
  message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form);
  }

}
