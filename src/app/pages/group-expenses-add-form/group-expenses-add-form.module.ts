import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupExpensesAddFormPage } from './group-expenses-add-form.page';

const routes: Routes = [
  {
    path: '',
    component: GroupExpensesAddFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  declarations: [GroupExpensesAddFormPage],
  providers: [CurrencyPipe]
})
export class GroupExpensesAddFormPageModule {}
