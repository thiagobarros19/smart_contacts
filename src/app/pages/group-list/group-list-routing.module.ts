import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupListPage } from './group-list.page';

const routes: Routes = [
  {
    path: '',
    component: GroupListPage
  },
  {
    path: 'group-form/:id',
    loadChildren: () => import('../group-form/group-form.module').then(m => m.GroupFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupListPageRoutingModule {}
