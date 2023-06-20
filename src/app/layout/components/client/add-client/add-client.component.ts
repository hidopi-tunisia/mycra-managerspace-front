import { Component, OnInit ,ViewEncapsulation,ChangeDetectionStrategy} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService, Person } from 'app/layout/components/client/add-client/data.service';
import { NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader } from 'ng2-file-upload';
import { I18n,CustomDatepickerI18n} from 'app/layout/components/client/add-client/date-picker-i18n.service';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'app/services/client.service';
import { ProjetService } from 'app/services/projet.service';
import { Router } from '@angular/router';
const URL = 'https://your-url.com';



@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }] // define custom NgbDatepickerI18n provider


})
export class AddClientComponent implements OnInit {
  public contentHeader: object
  public basicDPdata: NgbDateStruct;
  projets:any[]=[]
  submitted : boolean
  files:any
  public i18nDPdata: NgbDateStruct;
  public uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  selectedProjet:any

 
  ajouter() {
    console.log(this.client)
    this.client.projet=this.selectedProjet
    this.clientService.addClient(this.client).subscribe((data)=>{
      this.toastr.success('client ajouté.', 'Success!', {
        toastClass: 'toast ngx-toastr',
        closeButton: true,
       
      });
      this.router.navigateByUrl('/clients/liste')
      
    })
   
  }
    
 




/**
   * Select Custom Tag
   *
   * @param name
   */
selectAddTagMethod(name) {
  return { name: name, tag: true };
}


  
   // select basic
   public selectBasicLoading = false;
     // Select Custom Tag
  public customTag: any[] = [];
  public customTagNames = ['Node.js', 'Angular','Flutter', 'PHP','React Native'];

   // Reactive User Details form data
   public client = {
    nomSocial: '',
    sexe:'',
    nSiret: '',
    responsable: '',
    adressePostale:'',
    email:'',
    tel1:'',
    tel2:'',
    ville:'',
    codePostal:'',
    dateSignature:'',
    note:'',
    competences:'[]',
    document:'',
    projet:'' 
  };
  check=false
  
/**
   * Constructor
   *
   */
constructor(
  config: NgbPaginationConfig,
  private formBuilder: FormBuilder,
  private dataService: DataService,
  private toastr: ToastrService,
  private clientService:ClientService,
  private projetService:ProjetService,
  private router: Router,

  ) {
    config.size = 'sm';
		config.boundaryLinks = true;
  }
 // select basic
 private selectBasicMethod() {
  this.selectBasicLoading = true;
  this.dataService.getPeople().subscribe(x => {
    this.selectBasicLoading = false;
  });
}
  


updateSexe(sexe) {
if(sexe.target.checked) {this.client.sexe=sexe.target.value} else {this.client.sexe = '';}
this.check=!this.check
  console.log(this.client.sexe)
}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.projetService.getAllProjets().subscribe((data:any)=>{
      console.log(data);
      this.projets = data;
    })
    this.contentHeader = {
      headerTitle: 'Clients',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Liste',
            isLink: true,
            link: '../liste'
          },
          {
            name: 'Ajout Client',
            isLink: false
          }
        ]
      }
    }
    this.selectBasicMethod();
    this.customTagNames.forEach((c, i) => {
      this.customTag.push({ id: i, name: c });
    });

  }

  getFiles(event:any){
    this.files=event.target.file
   }
 

}
