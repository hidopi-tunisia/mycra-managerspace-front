import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'app/services/client.service';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class DetailsClientComponent implements OnInit {
 
 projects:any[]=[]
data:any
idClient:any

  constructor(
    private clientService: ClientService,
    private route : ActivatedRoute
    ) {
      this.route.params.subscribe(params => { 
        this.idClient=params.id
      })
     }

  ngOnInit(): void {

    this.clientService.getClient(this.idClient).subscribe((data:any)=>{
      console.log(data);
      this.data = data;
    })


  }

}
