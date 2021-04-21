import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Contact } from '../../../interfaces';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {

  activeSearchbar: boolean;
  contacts: Contact[];
  searchText: string;

  constructor(
    private menu: MenuController
  ) {
    this.activeSearchbar = false;
    this.contacts = [];
    this.searchText = "";
  }

  ngOnInit() {
    this.contacts.push({
      name: "Thiago Silva Barros",
      phone: [
        {
          number: "83999741937",
          whatsapp: false
        }
      ],
      email: "thiago.rck00@gmail.com"
    });
    this.contacts.push({
      name: "Lucas Emmanuel",
      phone: [
        {
          number: "83999999999",
          whatsapp: false
        }
      ],
      email: "exemplo@exemplo.com"
    });
    this.contacts.push({
      name: "Weverson Barbosa",
      phone: [
        {
          number: "83999999999",
          whatsapp: false
        }
      ],
      email: "exemplo@exemplo.com"
    });
  }

  changeStatusSearchbar(): void {
    this.searchText = "";
    this.activeSearchbar = !this.activeSearchbar;
  }
}
