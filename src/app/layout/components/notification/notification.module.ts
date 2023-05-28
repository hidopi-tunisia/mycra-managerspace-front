import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HorizontalLayoutModule } from 'app/layout/horizontal/horizontal-layout.module';
import { VerticalLayoutModule } from 'app/layout/vertical/vertical-layout.module';
import { NotificationRoutingModule } from './notification-routing.module';



@NgModule({
  declarations: [AddNotificationComponent],
  imports: [
     ToastrModule,
     ContentHeaderModule,
     TranslateModule,
      CoreCommonModule,
    NgbModule, 
    CommonModule,
    FlexLayoutModule.withConfig({ disableDefaultBps: true }),
        VerticalLayoutModule, 
        HorizontalLayoutModule, 
        NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,
        NotificationRoutingModule
        
  ],schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class NotificationModule { }
