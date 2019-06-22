import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupExpensesAddFormPage } from './group-expenses-add-form.page';
import {SpeechRecognition} from '@ionic-native/speech-recognition/ngx';

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
  providers: [CurrencyPipe, SpeechRecognition]
})
export class GroupExpensesAddFormPageModule {}
