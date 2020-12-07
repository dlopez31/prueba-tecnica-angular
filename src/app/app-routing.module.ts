import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaComponent } from './components/tabla/tabla.component';


const routes: Routes = [
  {
    path: 'monedas',
    component: TablaComponent
  },
  {
    path: '**',
    redirectTo: 'monedas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
