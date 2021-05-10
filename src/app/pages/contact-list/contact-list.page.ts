import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { Contact, Group } from 'src/interfaces';

import { ContactMenuPopoverComponent } from 'src/app/components/contact-menu-popover/contact-menu-popover.component';

import { ContactsService } from 'src/app/service/contacts/contacts.service';
import { GroupsService } from 'src/app/service/groups/groups.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {

  activeSearchbar: boolean;
  contacts: Contact[];
  searchText: string;
  groups: Group[];

  filterStatus: number;

  constructor(
    private popoverCtrl: PopoverController,
    private contactsService: ContactsService,
    private groupsService: GroupsService
  ) {
    this.activeSearchbar = false;
    this.filterStatus = 0;
    this.contacts = [];
    this.groups = [];
    this.searchText = "";
  }

  ngOnInit() {
    this.getContactList();
    this.getGroupList();
  }

  getContactList(): void {
    this.contactsService.getContacts().subscribe(
      response => {
        this.contacts = response;
      },
      err => {
        console.log(err);
      }
    )
  }

  getGroupList(): void {
    this.groupsService.getGroups().subscribe(
      response => {
        this.groups = response;
      },
      err => {
        console.log(err);
      }
    )
  }

  changeStatusSearchbar(): void {
    this.searchText = "";
    this.activeSearchbar = !this.activeSearchbar;
  }

  async openFilterMenu(event: Event): Promise<void> {
    const popover = await this.popoverCtrl.create({
      component: ContactMenuPopoverComponent,
      componentProps:{menuItem: this.groups.map(group =>{
        return {
          title: group.name,
          value: group.id
        }
      })},
      event: event
    })

    popover.onDidDismiss().then(
        data => {
          if(data.data){
            this.filterStatus = data.data.fromPopoverMenu;
            console.log(this.filterStatus);
          }
        }
    )

    return await popover.present();
  }
}
