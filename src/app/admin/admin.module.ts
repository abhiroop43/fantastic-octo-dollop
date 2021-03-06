import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterDataConfigurationComponent } from './master-data-configuration/master-data-configuration.component';
import { UserConfigurationComponent } from './user-configuration/user-configuration.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    MasterDataConfigurationComponent,
    UserConfigurationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
