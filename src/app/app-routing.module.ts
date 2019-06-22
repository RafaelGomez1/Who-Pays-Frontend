import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'log-in', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'log-in', loadChildren: './pages/log-in/log-in.module#LogInPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'group-overview', loadChildren: './pages/group-overview/group-overview.module#GroupOverviewPageModule' },
  { path: 'group-expenses', loadChildren: './pages/group-expenses/group-expenses.module#GroupExpensesPageModule' },
  { path: 'group-balance', loadChildren: './pages/group-balance/group-balance.module#GroupBalancePageModule' },
  { path: 'list-view', loadChildren: './components/list-view/list-view.module#ListViewPageModule' },
  { path: 'group-expenses-add-form',
    loadChildren: './pages/group-expenses-add-form/group-expenses-add-form.module#GroupExpensesAddFormPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
