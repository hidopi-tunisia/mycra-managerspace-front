
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetRoutingModule } from './projet-routing.module';
import { DetailsProjetComponent } from './details-projet/details-projet.component';
import { ListeProjetsComponent } from './liste-projets/liste-projets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { CalendarEventSidebarComponent } from './details-projet/calendar-sidebar/calendar-event-sidebar/calendar-event-sidebar.component';
import { CalendarMainSidebarComponent } from './details-projet/calendar-sidebar/calendar-main-sidebar/calendar-main-sidebar.component';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule } from '@core/components';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarService } from 'app/services/calendar.service';
FullCalendarModule.registerPlugins([dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]);


@NgModule({
  declarations: [
    ListeProjetsComponent,
    DetailsProjetComponent,
    CalendarEventSidebarComponent,
    CalendarMainSidebarComponent
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule,  
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    NgSelectModule,
    FullCalendarModule,
    CoreCommonModule,
    CoreSidebarModule,
    Ng2FlatpickrModule,
    NgbModule,

  ],
  providers: [CalendarService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjetModule { }
