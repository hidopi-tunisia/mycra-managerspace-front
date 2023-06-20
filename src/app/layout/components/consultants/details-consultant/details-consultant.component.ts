import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ConsultantService } from 'app/services/consultant.service';

import { UserViewService } from 'app/layout/components/consultants/details-consultant/user-view.service';
@Component({
  selector: 'app-details-consultant',
  templateUrl: './details-consultant.component.html',
  styleUrls: ['./details-consultant.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class DetailsConsultantComponent implements OnInit {
  data:any
  idConsultant:any

/* data={
  id:"",
  avatar:"",
  fullName:"eya rouine",
  email:"aya@gmail.com",
  username:"ayaRo",
  status:"pending",
  role:"admin",
  contact:"11 22 33"
} */



constructor(
  private consultantService: ConsultantService,
  private route : ActivatedRoute
  ) {
    this.route.params.subscribe(params => { 
      this.idConsultant=params.id
    })
   }

 
 


  ngOnInit(): void {
    this.consultantService.getOne(this.idConsultant).subscribe((data:any)=>{
      console.log(data);
      this.data = data;
    })
    
  }

}
