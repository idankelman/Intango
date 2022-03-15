import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private toastrService:ToastrService) { }

  ngOnInit(): void {
  }

  Toast(id:number){
    if(id==1){
      this.toastrService.success('Successfully Added', 'Success');
    }
    else if(id==2){
      this.toastrService.error('Error in Adding', 'Error');
    }
    else if(id==3){
      this.toastrService.info('Info', 'Info');
    }
    else if(id==4){
      this.toastrService.warning('Warning', 'Warning');
    }
    
  }

}
