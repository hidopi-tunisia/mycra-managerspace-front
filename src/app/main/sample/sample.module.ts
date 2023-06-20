import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { GoogleMapsModule } from '@angular/google-maps';
import { ChartsModule } from 'ng2-charts';


import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { SampleComponent } from './sample.component';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminGuard } from 'app/guards/admin.guard';


const routes = [
  {
    path: 'sample',
    component: SampleComponent,canActivate:[AdminGuard],
    data: { animation: 'sample' }
  },
  {
    path: 'home',
    component: HomeComponent,canActivate:[AdminGuard],
    data: { animation: 'home' }
  }
  
];

@NgModule({
  declarations: [SampleComponent, HomeComponent],
  imports: [RouterModule.forChild(routes),
     ToastrModule,
     ContentHeaderModule,
      TranslateModule,
       CoreCommonModule,
       NgbModule,
       GoogleMapsModule,
       ChartsModule,
        CoreCommonModule],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
