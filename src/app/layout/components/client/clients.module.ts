import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientsRoutingModule } from './clients-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsClientComponent } from './details-client/details-client.component';
import { ModifClientComponent } from './modif-client/modif-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HorizontalLayoutModule } from 'app/layout/horizontal/horizontal-layout.module';
import { VerticalLayoutModule } from 'app/layout/vertical/vertical-layout.module';
import { FileUploadModule } from 'ng2-file-upload';
import { ContentHeaderModule } from '../content-header/content-header.module';


@NgModule({
  declarations: [DetailsClientComponent,ModifClientComponent,AddClientComponent,ListeClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    RouterModule,
    CoreCommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule,
    FlexLayoutModule.withConfig({ disableDefaultBps: true }),
    VerticalLayoutModule, 
    HorizontalLayoutModule, 
    ContentHeaderModule, 
    CardSnippetModule,
    NgxDatatableModule,
    NgSelectModule,
    CommonModule,
    CoreCommonModule,
    FileUploadModule,
  ]
  ,schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class ClientsModule { }
