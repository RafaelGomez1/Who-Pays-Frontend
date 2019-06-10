import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Group} from '../../models/Group';
import {GroupExpenses} from '../../models/GroupExpenses';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupsService} from '../../services/groups.service';
import {User} from '../../models/User';
import {GroupBalance} from '../../models/GroupBalance';
import {ChartDataItem} from '../../models/ChartDataItem';
import {Platform} from '@ionic/angular';
import {GroupedVerticalBarChart} from '../../models/GroupedVerticalBarChart';

@Component({
  selector: 'app-group-expenses',
  templateUrl: './group-expenses.page.html',
  styleUrls: ['./group-expenses.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GroupExpensesPage implements OnInit {

    slideOptions = {
        initialSlide: 0,
        speed: 400
    };
  groupId: string;
  group: Group;
  activityName: string;
  groupExpenses: GroupExpenses[] = [];
  groupMembers: User[] = [];
  groupBalance: GroupBalance = new GroupBalance();
  groupedVerticalBarChart: GroupedVerticalBarChart[] = [];
  expenses: boolean;
  members: boolean;
  balance: boolean;

  // Params needed to create the charts
  chartData: ChartDataItem[] = [];
  scheme = {
      domain: ['#00b33c', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private router: Router,
              private route: ActivatedRoute,
              private groupService: GroupsService,
              private platform: Platform) {}

  ngOnInit() {
    // Retrieves the groupId from the params
    this.route.queryParams.subscribe(params => {
      this.groupId = this.route.snapshot.paramMap.get('id');
      this.getGroupById();
      this.getGroupBalance(this.groupId);
    });

    // Initializes the ion-segment variables
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

    getGroupBalance(groupId: string) {
      this.groupService.getGroupBalance(groupId).subscribe(groupBalance => {
          if (groupBalance.usersBalance !== null) {
              this.groupBalance = groupBalance;
              this.userBalanceToChartData();
              this.userBalanceToVerticalChart();
          }
      });
    }

    userBalanceToChartData() {
      this.groupBalance.usersBalance.forEach(userBalance => {
          if (userBalance.debts !== null && userBalance.debts.length > 0) {
              let totalUserDebt = 0;
              userBalance.debts.forEach( debt => totalUserDebt += debt.quantity);
              this.chartData.push(new ChartDataItem(userBalance.username, totalUserDebt));
              console.log('the chartData length is : ' + this.chartData.length);
          }
      });
      console.log('the chartData length is : ' + this.chartData.length);
      this.chartData.forEach(data => console.log(data.name + ' ' + data.value));
    }

    userBalanceToVerticalChart() {
      this.groupBalance.usersBalance.forEach( userBalance => {
         if (userBalance.debts !== null && userBalance.debts.length > 0) {
             const verticalBarData = new GroupedVerticalBarChart(userBalance.username);

             // Creates the structure to see who the user owns money to
             userBalance.debts.forEach( debt => {
                 verticalBarData.series.push(new ChartDataItem(debt.username, debt.quantity));
             });

             // Adds the debt object to the chart data
             this.groupedVerticalBarChart.push(verticalBarData);
         }
      });
    }

    addElement(event: any) {

    }

}
