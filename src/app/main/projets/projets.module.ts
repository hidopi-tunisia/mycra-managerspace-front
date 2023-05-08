import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProjectComponent } from './new-project/new-project.component';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';



@NgModule({
  declarations: [
    NewProjectComponent
  ],
  imports: [
    CommonModule,
    ContentHeaderModule
  ]
})
export class ProjetsModule { }
