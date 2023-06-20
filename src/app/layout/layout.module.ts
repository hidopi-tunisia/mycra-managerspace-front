import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from 'app/layout/custom-breakpoints';
import { VerticalLayoutModule } from 'app/layout/vertical/vertical-layout.module';
import { HorizontalLayoutModule } from 'app/layout/horizontal/horizontal-layout.module';
import { ContentHeaderModule } from "./components/content-header/content-header.module";
import { CardSnippetModule } from "../../@core/components/card-snippet/card-snippet.module";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { NavbarModule } from './components/navbar/navbar.module';



@NgModule({
    providers: [CustomBreakPointsProvider],
    exports: [VerticalLayoutModule, HorizontalLayoutModule,NavbarModule,],
    declarations: [
     
        
    ],
    imports: [
        FlexLayoutModule.withConfig({ disableDefaultBps: true }),
        VerticalLayoutModule, 
        HorizontalLayoutModule, 
        ContentHeaderModule, 
        CardSnippetModule,
        NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        CommonModule,
        CoreCommonModule,
        NgbModule,
        FileUploadModule,
        
    ],
   
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {}
