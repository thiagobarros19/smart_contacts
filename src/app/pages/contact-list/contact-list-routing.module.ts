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
    path: 'contact/:id',
    loadChildren: () => import('../contact/contact.module').then(m => m.ContactPageModule)
  },
  {
    path: 'contact-form',
    loadChildren: () => import('../contact-form/contact-form.module').then(m => m.ContactFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class ContactListPageRoutingModule {}
