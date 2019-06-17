import { Component, OnInit } from '@angular/core';
import {GroupExpenses} from '../../models/GroupExpenses';

@Component({
  selector: 'app-group-expenses-add-form',
  templateUrl: './group-expenses-add-form.page.html',
  styleUrls: ['./group-expenses-add-form.page.scss'],
})
export class GroupExpensesAddFormPage implements OnInit {

  groupExpense: GroupExpenses;
  concept: string;
  date: Date;
  quantity: number;
  totalDebt: number;

  constructor() { }

  ngOnInit() {
    this.groupExpense = new GroupExpenses();
  }

  speechToTextInput(event: any) {
  }


  logDate(event: any) {
    console.log(this.groupExpense.date);
  }
}
