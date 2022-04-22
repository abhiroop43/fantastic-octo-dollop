import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterDataConfigurationComponent } from './master-data-configuration/master-data-configuration.component';
import { UserConfigurationComponent } from './user-configuration/user-configuration.component';

const routes: Routes = [
  {
    path: 'master-data',
    component: MasterDataConfigurationComponent,
  },
  {
    path: 'user-configuration',
    component: UserConfigurationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
