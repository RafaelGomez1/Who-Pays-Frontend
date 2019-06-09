import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Group} from '../../models/Group';
import {GroupsService} from '../../services/groups.service';
import {GroupExpenses} from '../../models/GroupExpenses';

@Component({
  selector: 'app-group-overview',
  templateUrl: './group-overview.page.html',
  styleUrls: ['./group-overview.page.scss'],
})
export class GroupOverviewPage implements OnInit {

  groupId: string;
  group: Group;
  activityName: string;
  groupExpenses: GroupExpenses[];
  constructor(private router: Router,
              private route: ActivatedRoute,
              private groupService: GroupsService) {}

  ngOnInit() {
    // Retrieves the groupId from the params
    this.route.queryParams.subscribe(params => {
      this.groupId = this.route.snapshot.paramMap.get('id');
      this.getGroupById();
    });
  }

  getGroupById() {
    this.groupService.getGroupById(this.groupId).subscribe( group => {
      if (group !== null) {
        this.group = group;
        this.activityName = group.groupName;
      }

      if (group.groupExpenses != null) {
        this.groupExpenses = this.group.groupExpenses;
      } else {
        this.groupExpenses = [];
      }
    });
  }

}
