import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesEditComponent } from './candidates-edit/candidates-edit.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';

const routes: Routes = [
  {
    path: 'new',
    component: CandidatesEditComponent,
  },
  {
    path: 'edit/{id}',
    component: CandidatesEditComponent,
  },
  {
    path: 'list',
    component: CandidatesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatesRoutingModule {}
