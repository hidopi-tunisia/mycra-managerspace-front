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
import { ListeProjetsComponent } from 'app/layout/components/projet/liste-projets/liste-projets.component';

const routes = [
  {
    path: 'sample',
    component: SampleComponent,
    data: { animation: 'sample' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'projet',
    component: ListeProjetsComponent,
    data: { animation: 'projet' }
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
