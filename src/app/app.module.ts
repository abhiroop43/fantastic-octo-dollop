import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AngularMaterialDependenciesModule } from './angular-material-dependencies.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialDependenciesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
