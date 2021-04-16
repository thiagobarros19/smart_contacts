import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'contact-list',
        loadChildren: () => import('../contact-list/contact-list.module').then(m => m.ContactListPageModule)
      },
      {
        path: 'group-list',
        loadChildren: () => import('../group-list/group-list.module').then(m => m.GroupListPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/contact-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/contact-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
