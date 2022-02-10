import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() text = "this is where the information will be displayed";
  @Input() color = "#FFFFFF";
  @Input() header = "this is where the information will be displayed";

  constructor() { }

  ngOnInit(): void {
  }


}
