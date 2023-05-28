import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ModifClientComponent } from './modif-client/modif-client.component';
import { DetailsClientComponent } from './details-client/details-client.component';

const routes: Routes = [
  {
    path:'liste',component:ListeClientsComponent
  },
  {
    path:'add',component:AddClientComponent
  },
  {
    path:'update/:id',component:ModifClientComponent
  },
  {
    path:'details/:id',component:DetailsClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
