import {Component, OnInit} from '@angular/core';
import {Group} from '../models/Group';
import {GroupsService} from '../services/groups.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  screenName: string;
  userGroups: Group[];
  userGroupsFiltered: Group[];


  constructor(private groupsService: GroupsService,
              private router: Router) {}

  ngOnInit() {
    this.screenName = 'Groups List';
    // Eventually will be get all groups of user
    this.getAllGroups();
  }

  goToGroupPage(event: any, selectedGroup: Group) {

      this.router.navigate(['/tabs/group', selectedGroup.id]);
  }

  filterList(event: any) {
    // Set searchTerm to the value of the searchbar
    this.userGroupsFiltered = this.userGroups;
    const val = event.target.value;
    if (val && val.trim() !== '') {
      this.userGroupsFiltered = this.userGroupsFiltered.filter((item) => {
        return (item.groupName.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  getAllGroups() {
    this.groupsService.getAllGroups().subscribe(groups => {
      if (groups != null) {
        this.userGroups = groups;
      } else {
        this.userGroups = [];
      }
      this.userGroupsFiltered = this.userGroups;
    });
  }

   doRefresh(event: any) {
        this.getAllGroups();
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }

    // To be completed if there is enough time
    createGroup(event: any) {

    }

    loadInfiniteData(event: any) {

    }

}
