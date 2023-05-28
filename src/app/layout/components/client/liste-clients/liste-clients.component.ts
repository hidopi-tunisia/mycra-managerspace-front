import { Component, OnInit ,ViewEncapsulation,ViewChild} from '@angular/core';
import { ColumnMode,DatatableComponent,SelectionType } from '@swimlane/ngx-datatable';
import { ClientService } from 'app/services/client.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjetService } from 'app/services/projet.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ListeClientsComponent implements OnInit {
 // public 
 public data: any;
 projects:any[]=[]
  public basicSelectedOption: number = 10;
  public contentHeader: object;
  public ColumnMode = ColumnMode;
  public clients: any[]=[];
  private tempData = [];
  selectedProjet:any
  /*pageSize = 3;
  currentPage = 1;
  get paginatedClients() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.clients.slice(startIndex, endIndex);
  }
  */

  @ViewChild(DatatableComponent) table: DatatableComponent;



  constructor(config: NgbPaginationConfig,
    private clientService:ClientService,
    private modalService: NgbModal,
    private pService:ProjetService,
    private toastr: ToastrService) {
    config.size = 'sm';
		config.boundaryLinks = true;
  }

// modal Open Vertically Centered
modalOpenVC(modalVC,id,index) {
  this.modalService.open(modalVC, {
    centered: true
  }).result.then((data)=>{
    if(data=="accepted") this.supprimer(id,index)
  })
 
}
affecterProjet(modalVC,client) {
  this.modalService.open(modalVC, {
    centered: true
  }).result.then((data)=>{
    client.projet=this.selectedProjet
    this.clientService.updateClient(client).subscribe((data)=>{
      this.toastr.success('projet affecté au client.', 'Success!', {
        toastClass: 'toast ngx-toastr',
        closeButton: true,
       
      });
    })
  })
 
}

filterUpdate(event) {
  const val = event.target.value.toLowerCase();

  // filter our data
  const temp = this.tempData.filter(function (d) {
    return d.responsable.toLowerCase().indexOf(val) !== -1 || !val;
  });
}

//suppression
supprimer(id: any,index:any) {
  this.clientService.deleteClient(id).subscribe((data)=>{
    console.log('data supprimé',data);
    this.clients.slice(index,1);
    this.toastr.success('consultant supprimé.', 'Success!', {
      toastClass: 'toast ngx-toastr',
      closeButton: true,
    });
  })
 
}

  /**
   * On init
   */
  ngOnInit() {
    this.clientService.getAllClients().subscribe((rows:any)=>{
      console.log(rows);
      this.clients = rows;
    })
    this.pService.getAllProjets().subscribe((data:any)=>{
      console.log(data)
      this.projects=data
    })


     // content header
     this.contentHeader = {
      headerTitle: 'Clients',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Clients',
            isLink: true,
            link: '/'
          }
        ]
      }
    };
    
  }

  
  


}

