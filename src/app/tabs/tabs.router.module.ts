import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          },
          {
            path: 'group/balance/:id',
            loadChildren: '../pages/group-balance/group-balance.module#GroupBalancePageModule'
          },
          {
            path: 'group/create/expenses',
            loadChildren: '../pages/group-expenses-add-form/group-expenses-add-form.module#GroupExpensesAddFormPageModule'
          },
          {
            path: 'group/create/expenses/:groupId',
            loadChildren: '../pages/group-expenses-add-form/group-expenses-add-form.module#GroupExpensesAddFormPageModule'
          },
          {
            path: 'group/:id',
            children: [
                {
                    path: '',
                    loadChildren: '../pages/group-expenses/group-expenses.module#GroupExpensesPageModule'
                }
            ]
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabs/tab2',
    pathMatch: 'full'
  },
  {
    path: 'group/:id',
    redirectTo: '/tabs/tabs/tab2/group/:id',
    pathMatch: 'full'
  },
  {
    path: 'group/balance/:id',
    redirectTo: '/tabs/tabs/tab2/group/balance/:id',
    pathMatch: 'full'
  },
  {
    path: 'group/create/expenses',
    redirectTo: '/tabs/tabs/tab2/group/create/expenses',
    pathMatch: 'full'
  },
  {
    path: 'group/create/expenses/:groupId',
    redirectTo: '/tabs/tabs/tab2/group/create/expenses/:groupId',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
