import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { ContactMenuPopoverComponent } from '../../components/contact-menu-popover/contact-menu-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
  ],
  declarations: [
    ContactPage,
    ContactMenuPopoverComponent
  ]
})
export class ContactPageModule {}
