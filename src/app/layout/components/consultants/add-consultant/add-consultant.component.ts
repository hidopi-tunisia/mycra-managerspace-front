import { Component, OnInit ,ViewEncapsulation,ChangeDetectionStrategy} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService, Person } from 'app/layout/components/consultants/add-consultant/data.service';
import { NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader } from 'ng2-file-upload';
import { I18n,CustomDatepickerI18n} from 'app/layout/components/consultants/add-consultant/date-picker-i18n.service';
import { ConsultantService } from 'app/services/consultant.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


const URL = 'https://your-url.com';
@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }] // define custom NgbDatepickerI18n provider

})
export class AddConsultantComponent implements OnInit {
public contentHeader: object
  submitted : boolean
  files:any
  public i18nDPdata: NgbDateStruct;
  public uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  


  public ReactiveUserDetailsForm: FormGroup;
  public ReactiveUDFormSubmitted = false;
 
  public basicDPdata: NgbDateStruct;

// Reactive User Details form data
public consultant = {
 nom: '',
 prenom: '',
 sexe: '',
 poste: '',
 adressePostale:'',
 email:'',
 tel:'',
 experience:'',
 codePostal:'',
 dateEmbauche:'',
 dateDispo:'',
 note:'',
 linkedIn:'',
 document:'',
};

check=false

constructor(
  private formBuilder: FormBuilder,
  private dataService: DataService,
  private consultantService:ConsultantService,
  private toastr: ToastrService,
  private router: Router,
  ) {}
selectAddTagMethod(name) {
  return { name: name, tag: true };
}
 // select basic
 private selectBasicMethod() {
  this.selectBasicLoading = true;
  this.dataService.getPeople().subscribe(x => {
    this.selectBasic = x;
    this.selectBasicLoading = false;
  });
}

  // select Basic Multi
  public selectMulti: Observable<any[]>;
  public selectMultiSelected : [{ name: 'Karyn Wright' }];
  public SelectTag;
   // select basic
   public selectBasic: Person[] = [];
   public selectBasicLoading = false;
    
ajouter() {
  console.log(this.consultant)
  this.consultantService.addConsultant(this.consultant).subscribe((data)=>{
    
    this.toastr.success('consultant ajouté.', 'Success!', {
      toastClass: 'toast ngx-toastr',
      closeButton: true,
     
    });
    this.router.navigateByUrl('/consultants/liste')
    
  })
 
}
updateSexe(sexe) {
  if(sexe.target.checked) {this.consultant.sexe=sexe.target.value} else {this.consultant.sexe = '';}
  this.check=!this.check
    console.log(this.consultant.sexe)
  }


// Lifecycle Hooks
// -----------------------------------------------------------------------------------------------------

/**
 * On init
 */
ngOnInit() {
  
  this.contentHeader = {
    headerTitle: 'Consultants',
    actionButton: true,
    breadcrumb: {
      type: '',
      links: [
        {
          name: 'Home',
          isLink: false,
        },
        {
          name: 'Consultants',
          isLink: true,
          link: 'consultants/liste'

        }
        ,
        {
          name: 'Ajout Consultant',
          isLink: false
        }
      ]
    }
  }
  this.selectBasicMethod();
 

}

getFiles(event:any){
  this.files=event.target.file
 }


}

