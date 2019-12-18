import { NgModule } from '@angular/core';
import { TransitionsComponent } from './transitions/transitions.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'transitions', component: TransitionsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
