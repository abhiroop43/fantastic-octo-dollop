import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidatesEditComponent } from './candidates-edit/candidates-edit.component';
import { CandidatesRoutingModule } from './candidates-routing.module';



@NgModule({
  declarations: [
    CandidatesListComponent,
    CandidatesEditComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule
  ]
})
export class CandidatesModule { }
