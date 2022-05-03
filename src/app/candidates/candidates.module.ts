import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidatesEditComponent } from './candidates-edit/candidates-edit.component';
import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidateService } from '../services/candidate.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialDependenciesModule } from '../angular-material-dependencies.module';

@NgModule({
  declarations: [CandidatesListComponent, CandidatesEditComponent],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    HttpClientModule,
    AngularMaterialDependenciesModule,
  ],
  providers: [CandidateService],
})
export class CandidatesModule {}
