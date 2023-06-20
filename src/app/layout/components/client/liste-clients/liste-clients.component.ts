import { Component, OnInit ,ViewEncapsulation,ViewChild} from '@angular/core';
import { ColumnMode,DatatableComponent,SelectionType } from '@swimlane/ngx-datatable';
import { ClientService } from 'app/services/client.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjetService } from 'app/services/projet.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConsultantService } from 'app/services/consultant.service';

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
    private toastr: ToastrService,
    private router: Router,
    private http: HttpClient,
    private consultService:ConsultantService
    ) {
    config.size = 'sm';
		config.boundaryLinks = true;
  }

// modal Open Supprimer
modalOpenVC(modalVC,id,index) {
  this.modalService.open(modalVC, {
    centered: true
  }).result.then((data)=>{
    if(data=="accepted") this.supprimer(id,index)
  })
 
}
// modal Open Archiver
/*modalOpenArchive(modalArchive,id,index) {
  this.modalService.open(modalArchive, {
    centered: true
  }).result.then((data)=>{
    if(data=="accepted") this.archiver(id,index)
  })
 
}*/
//Afectation projet à un client
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
    this.router.navigateByUrl('/clients/liste')
  })
 
}

   // Method Search (filter)
filterUpdate(event) {
  const val = event.target.value.toLowerCase();

  // filter our data
  const temp = this.tempData.filter(function (d) {
    return d.responsable.toLowerCase().indexOf(val) !== -1 || !val;
  });
  // update the rows
this.clients = temp;
// Whenever the filter changes, always go back to the first page
this.table.offset = 0;

}


// Method supprimer

supprimer(id: any,index:any) {
  this.clientService.deleteClient(id).subscribe((data)=>{
    console.log('data supprimé',data);
    this.clients.splice(index,1);
    this.toastr.success('client supprimé.', 'Success!', {
      toastClass: 'toast ngx-toastr',
      closeButton: true,
    });
  })    
  this.router.navigateByUrl('/clients/liste')
}
// Method archiver
/*archiver(id: any,index:any) {
  this.clientService.archiveClient(id).subscribe((data)=>{
    console.log('data archivé',data);
    const clientIndex = this.clients.findIndex(client => client.id === id);
    if (clientIndex !== -1) {
      this.clients[clientIndex].archived = true; // Marquer le client comme archivé
    }
    this.toastr.success('client archivé.', 'Success!', {
      toastClass: 'toast ngx-toastr',
      closeButton: true,
    });
  })
  this.router.navigateByUrl('/clients/liste')
}*/
archiver(clientId: number): void {
  const url = "http://127.0.0.1:3000/client/archiver-client/${clientId}";
  this.http.put(url, {}).subscribe(
    () => {
      console.log('Client archivé avec succès.');
      this.clients.splice(clientId,1);
      // Effectuez d'autres actions si nécessaires après l'archivage du client.
      this.toastr.success('client archivé.', 'Success!', {
        toastClass: 'toast ngx-toastr',
        closeButton: true,
      });
    },
    error => {
      console.error('Erreur lors de l\'archivage du client :', error);
      // Gérez l'erreur d'archivage du client.
    }
    
  );
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
            isLink: false,
          }
        ]
      }
    };
    
  }

  
  getConsultant(idProjet:any){
   let consult=0
   this.consultService.getByIdProjet(idProjet).then((res:any)=>{
    consult=res
   })
    return consult 
  }


}

