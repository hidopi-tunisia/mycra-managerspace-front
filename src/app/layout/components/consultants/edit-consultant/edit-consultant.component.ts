import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ConsultantService } from 'app/services/consultant.service';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';

const URL = 'https://your-url.com';

@Component({
  selector: 'app-edit-consultant',
  templateUrl: './edit-consultant.component.html',
  styleUrls: ['./edit-consultant.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class EditConsultantComponent implements OnInit {
  // Public
  public contentHeader: object
  submitted : boolean
  files:any
  public i18nDPdata: NgbDateStruct;
  public uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  

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
  idConsultant:any

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private constService:ConsultantService,
    private toastr: ToastrService

    ) {
   this.route.params.subscribe((data)=>{
    this.idConsultant=data.id
   })
  }
 

  /**
   * Upload Image
   *
   * @param event
   */
  // uploadImage(event: any) {
  //   if (event.target.files && event.target.files[0]) {
  //     let reader = new FileReader();

  //     reader.onload = (event: any) => {
  //       this.avatarImage = event.target.result;
  //     };

  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }

  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
    if (form.valid) {
      console.log('Submitted...!');
    }
    this.router.navigateByUrl('/consultants/liste')
  }
 modifier(consultant){
  this.constService.updateConsultant(consultant).subscribe((data)=>{
    this.toastr.success('Consultant modifié.', 'Success!', {
      toastClass: 'toast ngx-toastr',
      closeButton: true,
     
    });
  })
  this.router.navigateByUrl('/consultants/liste')
  
 }

  ngOnInit(): void {
   
    this.constService.getOne(this.idConsultant).subscribe((data:any)=>{
      this.consultant=data
    })
    this.contentHeader = {
      headerTitle: 'Consultants',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
          },
          
          {
            name: ' Consultants',
            isLink: true,
            Link:''
          },
          {
            name: 'Modification Consultant',
            isLink: false
          }
        ]
      }
    }
  }

}
