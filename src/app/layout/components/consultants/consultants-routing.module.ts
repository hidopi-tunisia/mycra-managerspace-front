import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeConsultantsComponent } from './liste-consultants/liste-consultants.component';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { DetailsConsultantComponent } from './details-consultant/details-consultant.component';
import { EditConsultantComponent } from './edit-consultant/edit-consultant.component';

const routes: Routes = [
  {
    path:'liste',component:ListeConsultantsComponent
  },
  {
    path:'add',component:AddConsultantComponent
  },
  {
    path:'details/:id',component:DetailsConsultantComponent
  },
  {
    path:'edit/:id',component:EditConsultantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantsRoutingModule { }
