import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactFormPageRoutingModule } from './contact-form-routing.module';

import { ContactFormPage } from './contact-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ContactFormPage],
  providers:[
    FormBuilder,
  ]
})
export class ContactFormPageModule {}
