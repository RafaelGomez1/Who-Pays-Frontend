import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupExpensesPage } from './group-expenses.page';
import {NgxChartsModule} from '@swimlane/ngx-charts';

const routes: Routes = [
  {
    path: '',
    component: GroupExpensesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxChartsModule
  ],
  declarations: [GroupExpensesPage]
})
export class GroupExpensesPageModule {}
