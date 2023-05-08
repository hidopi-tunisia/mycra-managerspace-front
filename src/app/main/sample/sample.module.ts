import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { SampleComponent } from './sample.component';
import { HomeComponent } from './home.component';
import { ProjetsComponent } from '../projets/projets.component';
import { NewProjectComponent } from '../projets/new-project/new-project.component';
import { ProjetsModule } from '../projets/projets.module';
import { ProjetsService } from '../projets/projets.service';

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
    path: 'projets',
    component: ProjetsComponent,
    resolve: {
      datatables: ProjetsService
    },
    data: { animation: 'projets' }
  },
  {
    path: 'projets/new-project',
    component: NewProjectComponent,
    data: { animation: 'new-project' }
  }

];

@NgModule({
  declarations: [SampleComponent, HomeComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule, ProjetsModule ],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
