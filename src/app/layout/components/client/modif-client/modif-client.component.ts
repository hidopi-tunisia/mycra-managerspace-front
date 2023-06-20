
  import { Component, OnInit ,ViewEncapsulation,ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, Person } from 'app/layout/components/client/modif-client/data.service';
import { NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader } from 'ng2-file-upload';
import { I18n,CustomDatepickerI18n} from 'app/layout/components/client/modif-client/date-picker-i18n.service';
import { ClientService } from 'app/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

const URL = 'https://your-url.com';

@Component({
  selector: 'app-modif-client',
  templateUrl: './modif-client.component.html',
  styleUrls: ['./modif-client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }] // define custom NgbDatepickerI18n provider

})
export class ModifClientComponent implements OnInit {

  @Input() data:any={}
  @Output() updateC=new EventEmitter<any>()
  public contentHeader: object
  submitted : boolean
  files:any
  public i18nDPdata: NgbDateStruct;
  public uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  public basicDPdata: NgbDateStruct;
  idClient:any


  /**
     * Select Custom Tag
     *
     * @param name
     */
  selectAddTagMethod(name) {
    return { name: name, tag: true };
  }
  
  
    // select Basic Multi
    public selectMulti: Observable<any[]>;
     // select basic
     public selectBasic: Person[] = [];
     public selectBasicLoading = false;
       // Select Custom Tag
    public customTag: any[] = [];
    public customTagNames = ['React', 'Angular', 'PHP','Node JS'];
    // Reactive User Details form data
   



  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private dataService: DataService,
    private toastr: ToastrService,
    private clientService:ClientService) { 
      this.route.params.subscribe((data)=>{
        this.idClient=data.id
      })
    }
// select basic
private selectBasicMethod() {
  this.selectBasicLoading = true;
  this.dataService.getPeople().subscribe(x => {
    this.selectBasic = x;
    this.selectBasicLoading = false;
  });
}
public client =
   {
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

  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
    if (form.valid) {
      console.log('Submitted...!');
    }
    this.router.navigateByUrl('/clients/liste')
  }

  modifier(client){
    this.clientService.updateClient(client).subscribe((data)=>{
      this.toastr.success('Client modifié', 'Success!', {
        toastClass: 'toast ngx-toastr',
        closeButton: true,
       
      });
    })
    this.router.navigateByUrl('/clients/liste')
    
   }

  ngOnInit(): void {
    this.clientService.getClient(this.idClient).subscribe((data:any)=>{
      this.client=data
    })
    this.contentHeader = {
      headerTitle: 'Clients',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
          }, 
          {
            name: 'Clients',
            isLink: true,
            link: '../liste'
          },  
          {
            name: 'Modifier Client',
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


