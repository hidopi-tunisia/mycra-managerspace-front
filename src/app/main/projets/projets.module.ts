import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetsComponent } from './projets.component';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CoreDirectivesModule } from '@core/directives/directives';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CsvModule } from '@ctrl/ngx-csv';
import { FormsModule } from '@angular/forms';
import { ProjetsService } from './projets.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from '@fake-db/fake-db.service';
import { ErrorInterceptor, fakeBackendProvider, JwtInterceptor } from 'app/auth/helpers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CorePipesModule } from '@core/pipes/pipes.module';



@NgModule({
  declarations: [ProjetsComponent],
  imports: [
    CoreCommonModule,
    CommonModule,
    ContentHeaderModule,
    CoreDirectivesModule,
    NgxDatatableModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),
    CorePipesModule,
    NgbModule,

  ],
  providers: [ProjetsService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // ! IMPORTANT: Provider used to create fake backend, comment while using real API
    ],
  exports: [ProjetsComponent]
})
export class ProjetsModule { }
