import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRoutes } from './project.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ProjectRoutes)
  ]
})
export class ProjectModule { }
