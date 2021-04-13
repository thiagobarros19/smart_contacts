import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListPage } from './contact-list.page';
import { ContactPage } from './../contact/contact.page';

const routes: Routes = [
  {
    path: '',
    component: ContactListPage,
  },
  {
    path: 'contact',
    component: ContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class ContactListPageRoutingModule {}
