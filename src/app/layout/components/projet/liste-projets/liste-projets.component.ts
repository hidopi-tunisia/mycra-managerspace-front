import { Component, OnInit ,ViewEncapsulation,ViewChild} from '@angular/core';
import { ColumnMode,DatatableComponent,SelectionType } from '@swimlane/ngx-datatable';
import { ProjetService } from 'app/services/projet.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'app/services/client.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-liste-projets',
  templateUrl: './liste-projets.component.html',
  styleUrls: ['./liste-projets.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ListeProjetsComponent implements OnInit {
   // public

  public data: any; 
  private tempData = [];
  public basicSelectedOption: number = 10;
  public contentHeader: object;
  public ColumnMode = ColumnMode;
  clients:any[]=[]
  selectedClient:any
  public projets: any[]=[];

  public SelectionType = SelectionType;
  idProjet:any

  
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(config: NgbPaginationConfig,
    private router: Router,
    private route:ActivatedRoute,
     private projetService:ProjetService,
     private modalService: NgbModal,
     private toastr: ToastrService,
     private clService:ClientService,) {
      this.route.params.subscribe((data)=>{
        this.idProjet=data.id
       })
    config.size = 'sm';
		config.boundaryLinks = true;
  }
  // modal suppression
modalOpenVC(modalVC,id,index) {
  this.modalService.open(modalVC, {
    centered: true
  }).result.then((data)=>{
    if(data=="accepted") this.supprimer(id,index)
  })
 
}
//Method suppression
supprimer(id: any,index:any) {
  console.log(id,index)
    this.projetService.deleteProjet(id).subscribe((data)=>{
    this.projets.splice(index,1);
    this.toastr.success('projet supprimé.', 'Success!', {
      toastClass: 'toast ngx-toastr',
      closeButton: true,
     
    });
  })
}
// modal Open Form modification
modalOpenForm(modalForm) {
  this.projetService.getProjet(this.idProjet).subscribe((data:any)=>{
    this.projet=data
  })
  this.modalService.open(modalForm,{
    
  });
}
// modal Open Form ajout
modalOpenFormCreate(modalFormCreate) {
  this.modalService.open(modalFormCreate, {
    centered: true
  }).result.then((data)=>{
    if(data=="accepted") this.ajouter()
  })
 
}

//filtrage
filterUpdate(event) {
  const val = event.target.value.toLowerCase();

  // filter our data
  const temp = this.tempData.filter(function (d) {
    return d.nomProjet.toLowerCase().indexOf(val) !== -1 || !val;
  });
}


ajouter() {
  console.log(this.projet)
  
  this.projetService.addProjet(this.projet).subscribe((data)=>{
    this.projet.client=this.selectedClient
    
    this.toastr.success('client ajouté.', 'Success!', {
      toastClass: 'toast ngx-toastr',
      closeButton: true,
     
    });
   this.router.navigateByUrl('/projets/liste')
    
  })}
  public projet = {
    nomProjet :'',
    code :'',
    categorie :'',
    client :'',


}
  ngOnInit(): void {
    this.projetService.getAllProjets().subscribe((data:any)=>{
      console.log(data);
      this.projets = data;
    })
    this.clService.getAllClients().subscribe((data:any)=>{
      this.tempData = this.clients;
      console.log(data)
      this.clients=data
    })


    // content header
  this.contentHeader = {
    headerTitle: 'Projets',
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
          name: 'Projets',
          isLink: false,
        }
      ]
    }
  };
  }


}
