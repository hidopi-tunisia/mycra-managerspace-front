import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil.component';
import { FormsModule } from '@angular/forms';
import { CoreSidebarModule } from '@core/components';
import { CoreDirectivesModule } from '@core/directives/directives';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ ProfilComponent],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    FormsModule,
    RouterModule,
    CoreCommonModule,
    FormsModule,
    NgbModule,
    CorePipesModule,
    CoreDirectivesModule,
    CoreSidebarModule
    
    
  ]
})
export class ProfilModule { }
