import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetsComponent } from './projets.component';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';



@NgModule({
  declarations: [ProjetsComponent],
  imports: [
    CommonModule,
    ContentHeaderModule
  ],
  exports: [ProjetsComponent]
})
export class ProjetsModule { }
