import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ContactListPageRoutingModule } from './contact-list-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ContactListPage } from './contact-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ContactListPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ContactListPage]
})
export class ContactListPageModule {}
