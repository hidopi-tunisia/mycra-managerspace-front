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


const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  //canActivate:[AdminGuard],
  {
    path: 'clients',
    loadChildren: () => import('./layout/components/client/clients.module').then(m => m.ClientsModule)
  },

  {
    path: 'consultants',
    loadChildren: () => import('./layout/components/consultants/consultants.module').then(m => m.ConsultantsModule)
  },
 
  {
    path: 'notification',
    loadChildren: () => import('./layout/components/notification/notification.module').then(m => m.NotificationModule)
  },
  {
    path: 'monprofil',
    loadChildren: () => import('./layout/components/profil/profil.module').then(m => m.ProfilModule)
  },
  {
    path: 'apropos',
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

@NgModule({
  declarations: [AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy'
    }),
    TranslateModule.forRoot(),

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
