import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr'; // For auth after login toast

import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';

import { coreConfig } from 'app/app-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AdminGuard } from './guards/admin.guard';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from '@fake-db/fake-db.service';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'projets',canActivate:[AdminGuard],
    loadChildren: () => import('./layout/components/projet/projet.module').then(m => m.ProjetModule)
  } ,
  //canActivate:[AdminGuard],
  {
    path: 'clients',canActivate:[AdminGuard],
    loadChildren: () => import('./layout/components/client/clients.module').then(m => m.ClientsModule)
  },

  {
    path: 'consultants',canActivate:[AdminGuard],
    loadChildren: () => import('./layout/components/consultants/consultants.module').then(m => m.ConsultantsModule)
  },
 
  {
    path: 'notification',canActivate:[AdminGuard],
    loadChildren: () => import('./layout/components/notification/notification.module').then(m => m.NotificationModule)
  },
  {
    path: 'monprofil',canActivate:[AdminGuard],
    loadChildren: () => import('./layout/components/profil/profil.module').then(m => m.ProfilModule)
  },
  {
    path: 'apropos',canActivate:[AdminGuard],
    loadChildren: () => import('./layout/components/apropos/apropos.module').then(m => m.AproposModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/miscellaneous/error' //Error 404 - Page not found
  }
];
FullCalendarModule.registerPlugins([dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]);

@NgModule({
  declarations: [AppComponent ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy'
    }),
    TranslateModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),

    //NgBootstrap
    NgbModule,
    ToastrModule.forRoot(
      {
        positionClass:'toast-top-right',
        timeOut:5000,

      }
    ),

    // Core modules
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,

    // App modules
    LayoutModule,
    SampleModule,
    NgxDatatableModule
  ],

  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
