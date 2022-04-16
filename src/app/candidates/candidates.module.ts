import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidatesEditComponent } from './candidates-edit/candidates-edit.component';



@NgModule({
  declarations: [
    CandidatesListComponent,
    CandidatesEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CandidatesModule { }
