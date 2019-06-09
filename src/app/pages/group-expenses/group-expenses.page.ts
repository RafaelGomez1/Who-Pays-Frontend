import { Component, OnInit } from '@angular/core';
import {Group} from '../../models/Group';
import {GroupExpenses} from '../../models/GroupExpenses';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupsService} from '../../services/groups.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-group-expenses',
  templateUrl: './group-expenses.page.html',
  styleUrls: ['./group-expenses.page.scss'],
})
export class GroupExpensesPage implements OnInit {

  groupId: string;
  group: Group;
  activityName: string;
  groupExpenses: GroupExpenses[] = [];
  groupMembers: User[] = [];
  expenses: boolean;
  members: boolean;
  balance: boolean;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private groupService: GroupsService) {}

  ngOnInit() {
    // Retrieves the groupId from the params
    this.route.queryParams.subscribe(params => {
      this.groupId = this.route.snapshot.paramMap.get('id');
      this.getGroupById();
    });
    this.expenses = true;
    this.members = false;
    this.balance = false;
  }

  getGroupById() {
    this.groupService.getGroupById(this.groupId).subscribe( group => {
      if (group !== null) {
        this.group = group;
        this.activityName = group.groupName;
        if (group.groupExpenses != null) {
          this.groupExpenses = group.groupExpenses;
        }
        if (group.members !== null && group.members.length > 0) {
            this.groupMembers = group.members;
        }
      }
    });
  }

  membersSegmentSelected(event: any) {
      if (!this.members) {
          this.members = true;
          this.expenses = false;
          this.balance = false;
      }
  }

  balanceSegmentSelected(event: any) {
      if (!this.balance) {
          this.balance = true;
          this.members = false;
          this.expenses = false;
      }
  }

    expensesSegmentSelected(event: any) {
      if (!this.expenses) {
          this.expenses = true;
          this.members = false;
          this.balance = false;
      }
    }

}
