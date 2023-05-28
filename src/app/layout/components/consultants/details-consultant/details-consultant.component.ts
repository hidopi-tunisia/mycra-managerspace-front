import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { colors } from 'app/colors.const';
import { Router } from '@angular/router';


import { UserViewService } from 'app/layout/components/consultants/details-consultant/user-view.service';
@Component({
  selector: 'app-details-consultant',
  templateUrl: './details-consultant.component.html',
  styleUrls: ['./details-consultant.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class DetailsConsultantComponent implements OnInit {

data={
  id:"",
  avatar:"",
  fullName:"eya rouine",
  email:"aya@gmail.com",
  username:"ayaRo",
  status:"pending",
  role:"admin",
  contact:"11 22 33"
}



  constructor() {
    
  }

 
 


  ngOnInit(): void {
    
  }

}
