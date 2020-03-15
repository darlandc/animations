import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NgModule } from '@angular/core';
import { TransitionsComponent } from './transitions/transitions.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '**' , component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'transitions', component: TransitionsComponent },
  { path: 'slider' , component: SliderComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
