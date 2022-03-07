import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit{

  //----------------------------------------------------------------------------------
  //                          Properties

  elem! : HTMLElement;
  @Input() Switch : boolean = false;


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

    if(!this.Switch)
      this.elem.addEventListener('click',this.OpenModal);
    else
      this.elem.addEventListener('click',this.closeModal);
  }


  //----------------------------------------------------------------------------------
  //                          closing/opening the modal
  OpenModal() {
    $(".Wrapper").show();
  }

  closeModal(){
    $(".Wrapper").hide();
    
  }

}
