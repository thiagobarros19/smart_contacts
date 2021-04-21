import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupFormPageRoutingModule } from './group-form-routing.module';

import { GroupFormPage } from './group-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GroupFormPageRoutingModule
  ],
  declarations: [GroupFormPage],
  providers: [
    FormBuilder
  ]
})
export class GroupFormPageModule {}
