import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Group} from '../../models/Group';
import {GroupsService} from '../../services/groups.service';

@Component({
  selector: 'app-group-overview',
  templateUrl: './group-overview.page.html',
  styleUrls: ['./group-overview.page.scss'],
})
export class GroupOverviewPage implements OnInit {

  groupId: string;
  group: Group;
  activityName: string;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private groupService: GroupsService) {

    this.route.queryParams.subscribe(params => {
      console.log('there are params in the query');

      console.log('the groupId is: ' + this.router.getCurrentNavigation().extras.state.groupId);
      this.groupId = this.router.getCurrentNavigation().extras.state.groupId;
    });
  }

  ngOnInit() {
    // Retrieves the groupId from the params
    this.getGroupById();
  }

  getGroupById() {
    this.groupService.getGroupById(this.groupId).subscribe( group => {
      if (group !== null) {
        this.group = group;
        this.activityName = group.groupName;
      } else {
      }
    });
  }

}
