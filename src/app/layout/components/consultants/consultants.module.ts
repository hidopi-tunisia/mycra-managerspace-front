import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';


import { ConsultantsRoutingModule } from './consultants-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CoreCommonModule } from '@core/common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreSidebarModule } from '@core/components';
import { CoreDirectivesModule } from '@core/directives/directives';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EditConsultantComponent } from './edit-consultant/edit-consultant.component';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { DetailsConsultantComponent } from './details-consultant/details-consultant.component';
import { ListeConsultantsComponent } from './liste-consultants/liste-consultants.component';
import { ContentHeaderModule } from "../content-header/content-header.module";
import { FileUploadModule } from 'ng2-file-upload';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HorizontalLayoutModule } from 'app/layout/horizontal/horizontal-layout.module';
import { VerticalLayoutModule } from 'app/layout/vertical/vertical-layout.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [EditConsultantComponent, AddConsultantComponent, DetailsConsultantComponent, ListeConsultantsComponent
    ],
    providers: [],
    imports: [
        CommonModule,
        CoreCommonModule,
        FormsModule,
        NgbModule,
        NgSelectModule,
        Ng2FlatpickrModule,
        NgxDatatableModule,
        CorePipesModule,
        CoreDirectivesModule,
        CoreSidebarModule,
        ContentHeaderModule,
        ConsultantsRoutingModule,
        FileUploadModule,
    ReactiveFormsModule,
    ToastrModule,
    FlexLayoutModule.withConfig({ disableDefaultBps: true }),
    VerticalLayoutModule, 
    HorizontalLayoutModule, 

    ],schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class ConsultantsModule { }
