import { Component, OnInit ,ViewEncapsulation,ViewChild} from '@angular/core';
import { ColumnMode,DatatableComponent,SelectionType } from '@swimlane/ngx-datatable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultantService } from 'app/services/consultant.service';
import { ProjetService } from 'app/services/projet.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-liste-consultants',
  templateUrl: './liste-consultants.component.html',
  styleUrls: ['./liste-consultants.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ListeConsultantsComponent implements OnInit {
 // public 
  public data: any;
  private tempData = [];
  projects:any[]=[]
  selectedProjet:any
  public basicSelectedOption: number = 10;
  public contentHeader: object;
  public ColumnMode = ColumnMode;
  public consultants: any[]=[];
  public SelectionType = SelectionType;
/*  pageSize = 3;
  currentPage = 1;
  get paginatedConsultants() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.consultants.slice(startIndex, endIndex);
  }
  */

  @ViewChild(DatatableComponent) table: DatatableComponent;


  constructor(
    config: NgbPaginationConfig,
    private consultantService:ConsultantService,
    private modalService: NgbModal,
    private pService:ProjetService,
    private toastr: ToastrService,
    private router: Router,

    ) {
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
//Afectation projet à un consultant
affecterProjet(modalVC,consultant) {
  this.modalService.open(modalVC, {
    centered: true
  }).result.then((data)=>{
    consultant.projet=this.selectedProjet
    this.consultantService.updateConsultant(consultant).subscribe((data)=>{
      this.toastr.success('projet affecté au consultant.', 'Success!', {
        toastClass: 'toast ngx-toastr',
        closeButton: true,
       
      });this.router.navigateByUrl('/consultants/liste')
    })
    
  })
 
}

//Method suppression
supprimer(id: any,index:any) {
  console.log(id,index)
    this.consultantService.deleteConsultant(id).subscribe((data)=>{
    this.consultants.splice(index,1);
    this.toastr.success('consultant supprimé.', 'Success!', {
      toastClass: 'toast ngx-toastr',
      closeButton: true,
     
    });
  })
}

 ///filtrage
filterUpdate(event) {
  const val = event.target.value.toLowerCase();
 // filter our data
  const temp = this.tempData.filter(function (d) {
    return d.nom.toLowerCase().indexOf(val) !== -1 || !val;
  });
}



ngOnInit(): void {
  this.consultantService.getAllConsultants().subscribe((rows:any)=>{
    console.log(rows);
    this.consultants = rows;
  })
  this.pService.getAllProjets().subscribe((data:any)=>{
    console.log(data)
    this.projects=data
  })


  // content header
  this.contentHeader = {
    headerTitle: 'Consultants',
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
          name: 'Consultants',
          isLink: false,
        }
      ]
    }
  };
    
  }

}
