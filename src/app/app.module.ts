import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProgressComponent } from './components/progress/progress.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatTableModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [TablaComponent,
    ProgressComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
