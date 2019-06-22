import { Component, OnInit } from '@angular/core';
import {GroupExpenses} from '../../models/GroupExpenses';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CurrencyPipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupsService} from '../../services/groups.service';
import {User} from '../../models/User';
import {Group} from '../../models/Group';
import {Payer} from '../../models/Payer';
import {Debtor} from '../../models/Debtor';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';


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
  payers: Payer[] = [];
  debtors: Debtor[] = [];

  myForm: FormGroup;
  groupId: string;
  group: Group;
  groupMembers: User[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private groupService: GroupsService,
              private currencyPipe: CurrencyPipe,
              private speechRecognition: SpeechRecognition) {
    this.route.queryParams.subscribe(params => {
      this.groupId = this.route.snapshot.paramMap.get('groupId');
      this.getGroupById();
    });
  }

  ngOnInit() {
    this.groupExpense = new GroupExpenses();

    this.speechRecognition.hasPermission()
        .then((hasPermission: boolean) => {
          if (!hasPermission) {
            this.speechRecognition.requestPermission()
                .then(
                    () => console.log('Granted'),
                    () => console.log('Denied')
                );
          }
    });
  }

  speechToTextInput(event: any) {
    this.speechRecognition.startListening()
        .subscribe(
            (matches: Array<string>) => {
              this.concept = matches[0];
              console.log(this.concept);
            }
        );
  }

  logDate(event: any) {
    console.log(this.groupExpense.date);
  }

  getGroupById() {
    this.groupService.getGroupById(this.groupId).subscribe(group => {
      if (group !== null) {
        console.log(group);
        this.group = group;
        this.groupMembers = group.members;
      }
    });
  }

  onDebtorsEventEmitted(event: any) {
    const userArray: User[] = event.detail.value;
    userArray.forEach(user => {
      if (this.payers.filter(debtor => debtor.debtor === user).length === 0) {
        this.payers.push(new Payer(user));
      }
    });
  }

  onPayersEventEmitted(event: any) {
    const userArray: User[] = event.detail.value;
    userArray.forEach(user => {
      this.payers.forEach(payer => {
        if (payer.payer === null || payer.payer === undefined) {
          payer.payer = user;
        }
      });
    });
  }

  onSubmitCredentials() {
    this.groupExpense = new GroupExpenses();
    this.groupExpense.concept = this.concept;
    this.groupExpense.totalQuantity = this.quantity;
    this.groupExpense.totalDebt = this.totalDebt;
    this.groupExpense.totalPaid = 0;
    this.groupExpense.payers = this.payers;
    this.groupExpense.debtors = this.debtors;

    this.groupService.addExpensesToGroup(this.groupExpense, this.groupId).subscribe();
    this.router.navigate(['/tabs/group', this.groupId]);
  }
}
