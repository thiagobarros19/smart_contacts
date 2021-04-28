import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupPageRoutingModule } from './group-routing.module';

import { GroupPage } from './group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GroupPageRoutingModule
  ],
  declarations: [GroupPage],
  providers: [
    FormBuilder
  ]
})
export class GroupPageModule {}
