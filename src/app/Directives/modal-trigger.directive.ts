import { Directive, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit{

  //----------------------------------------------------------------------------------
  //                          Properties

  elem! : HTMLElement;


  //----------------------------------------------------------------------------------
  //binding the element to the property of the element that is being passed in
  constructor(ref : ElementRef) { 
    this.elem = ref.nativeElement;
  }


  //----------------------------------------------------------------------------------
  //                          Functions

  
  //----------------------------------------------------------------------------------
  //                          adding event listener to the element
  ngOnInit(): void {
    this.elem.addEventListener('click',this.CloseModal);
  }


  //----------------------------------------------------------------------------------
  //                          closing the modal
  CloseModal() {
    $(".Wrapper").hide();
  }

}
