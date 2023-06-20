import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProjetsComponent } from './liste-projets/liste-projets.component';
import { DetailsProjetComponent } from './details-projet/details-projet.component';
import { CalendarService } from 'app/services/calendar.service';

const routes: Routes = [
  {
    path:'liste',component:ListeProjetsComponent
  },
  {
    path:'details/:id',component:DetailsProjetComponent,
    resolve: {
      data: CalendarService
    },
    data: { animation: 'calendar' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule { }
