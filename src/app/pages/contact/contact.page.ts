import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PopoverController } from '@ionic/angular';

import { ContactMenuPopoverComponent } from './../../components/contact-menu-popover/contact-menu-popover.component';

interface Contact{
  name: string;
  phone: string[];
  mail: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  contactId: number;
  contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private popoverCtrl: PopoverController
  ) {
    this.contact = {
      name: "",
      phone: [
        ""
      ],
      mail: ""
    }
  }

  ngOnInit() {
    this.contactId = parseInt(this.route.snapshot.params.id);
    this.setContact(this.contactId);
  }

  setContact(id: number): void{
    switch (id){
      case 1:
        this.contact.name = "Thiago Silva"
        this.contact.phone[0] = "83999741937"
        this.contact.phone[1] = "83999741937"
        this.contact.mail = "thiago.rck00@gmail.com"
        break
      case 2:
        this.contact.name = "Lucas Emmanuel"
        this.contact.phone[0] = "83999999999"
        this.contact.mail = "exemplo@exemplo.com"
        break
      case 3:
        this.contact.name = "Weverson Barbosa"
        this.contact.phone[0] = "83999999999"
        this.contact.mail = "exemplo@exemplo.com"
        break
    }
  }

  async openPopoverMenu(event: Event): Promise<void> {
    const popover = await this.popoverCtrl.create({
      component: ContactMenuPopoverComponent,
      event: event
    })

    popover.onDidDismiss().then(
      data => console.log(data)
    )

    return await popover.present();
  }

}
