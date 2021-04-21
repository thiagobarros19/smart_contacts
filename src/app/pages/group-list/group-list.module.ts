import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupListPageRoutingModule } from './group-list-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { GroupListPage } from './group-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    GroupListPageRoutingModule
  ],
  declarations: [GroupListPage]
})
export class GroupListPageModule {}
