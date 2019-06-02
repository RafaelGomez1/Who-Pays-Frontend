import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'log-in', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'log-in', loadChildren: './pages/log-in/log-in.module#LogInPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'group-list', loadChildren: './pages/group-list/group-list.module#GroupListPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'group-overview', loadChildren: './pages/group-overview/group-overview.module#GroupOverviewPageModule' },
  { path: 'group-expenses', loadChildren: './pages/group-expenses/group-expenses.module#GroupExpensesPageModule' },
  { path: 'group-balance', loadChildren: './pages/group-balance/group-balance.module#GroupBalancePageModule' },
  { path: 'group-members', loadChildren: './pages/group-members/group-members.module#GroupMembersPageModule' },
  { path: 'header', loadChildren: './components/header/header.module#HeaderPageModule' },
  { path: 'list-view', loadChildren: './components/list-view/list-view.module#ListViewPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
