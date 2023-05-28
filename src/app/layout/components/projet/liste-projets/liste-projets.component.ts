import { Component, OnInit ,ViewEncapsulation,ViewChild} from '@angular/core';
import { ColumnMode,DatatableComponent,SelectionType } from '@swimlane/ngx-datatable';
import { ProjetService } from 'app/services/projet.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-liste-projets',
  templateUrl: './liste-projets.component.html',
  styleUrls: ['./liste-projets.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ListeProjetsComponent implements OnInit {
  public data: any;
  page = 1;
  // public
  public basicSelectedOption: number = 10;
  public contentHeader: object;
  public ColumnMode = ColumnMode;
  public projets: any[]=[];
  public rows: any[]=[];
  public SelectionType = SelectionType;
  pageSize = 3;
  currentPage = 1;
  get paginatedProjets() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.projets.slice(startIndex, endIndex);
  }
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(config: NgbPaginationConfig, private projetService:ProjetService,private modalService: NgbModal) {
    config.size = 'sm';
		config.boundaryLinks = true;
  }
  // modal Open Vertically Centered
modalOpenVC(modalVC) {
  this.modalService.open(modalVC, {
    centered: true
  });
}
// modal Open Form
modalOpenForm(modalForm) {
  this.modalService.open(modalForm);
}
// modal Open Form
modalOpenFormCreate(modalFormCreate) {
  this.modalService.open(modalFormCreate);
}

  ngOnInit(): void {
    this.projetService.getAllProjets().subscribe((data:any)=>{
      console.log(data);
      this.projets = data;
    })
  }

}
