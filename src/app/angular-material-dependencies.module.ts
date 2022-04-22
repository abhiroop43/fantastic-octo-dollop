import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

const materials = [MatSliderModule];

@NgModule({
  declarations: [],
  imports: [...materials],
  exports: [...materials],
})
export class AngularMaterialDependenciesModule {}
