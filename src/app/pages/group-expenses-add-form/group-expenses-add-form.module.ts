import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    RouterModule.forChild(routes)
  ],
  declarations: [GroupExpensesAddFormPage]
})
export class GroupExpensesAddFormPageModule {}
