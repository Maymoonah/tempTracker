import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormControl } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'form', component: FormComponent, pathMatch: 'full'},
  { path: 'confirmation', component: ConfirmationComponent, pathMatch: 'full'}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
