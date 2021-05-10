import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray } from '@angular/forms';
import { AlertController } from '@ionic/angular';

import { PopoverController } from '@ionic/angular';

import { ContactsService } from 'src/app/service/contacts/contacts.service';

import { Contact, NumberContact } from 'src/interfaces';
import { mask } from 'src/util';

import { ContactMenuPopoverComponent } from 'src/app/components/contact-menu-popover/contact-menu-popover.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  public contactId: number;
  public contact: Contact;

  public phoneNumber: FormArray;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private popoverCtrl: PopoverController,
    public alertController: AlertController,
    private contactsService: ContactsService
  ) {
    this.contact = {
      name: "",
      contact: [
        {
          number: "",
          whatsapp: false
        },
        {
          number: "",
          whatsapp: false
        }
      ],
      email: ""
    }
  }

  ngOnInit() {
    this.contactId = parseInt(this.route.snapshot.params.id);
    this.getContactById(this.contactId);
  }

  getContactById(id: number): void {
    this.contactsService.getContactsById(id).subscribe(
      response => {
        this.contact.name = response.name
        this.contact.email = response.email
        this.contact.contact = [];
        response.contact.map(response => {
          this.contact.contact.push({
            number: response.number,
            whatsapp: response.whatsapp
          })
        })
      },
      err => {
        console.log(err);
      }
    )
  }

  removeContact(id: number): void {
    this.contactsService.deleteContacts(id).subscribe(
      response => {
        this.router.navigate(['/tabs/contact-list']);
      },
      err => {
        console.log(err);
      }
    )
  }

  async removeContactConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Smart Contacts',
      message: 'Deseja remover este contato?',
      buttons: [
        {
          text: 'Não',
          cssClass: 'secondary',
        },
        {
          text: 'Sim',
          handler: () => {
            this.removeContact(this.contactId);
          }
        }
      ]
    });

    await alert.present();
  }

  async openPopoverMenu(event: Event): Promise<void> {
    const popover = await this.popoverCtrl.create({
      component: ContactMenuPopoverComponent,
      componentProps:{menuItem: [
        {
          title: "Editar Contato",
          value: "editar"
        },
        {
          title: "Remover Contato",
          value: "remover"
        }
      ]},
      event: event
    })

    popover.onDidDismiss().then(
        data => {
          if(data.data){
            if(data.data.fromPopoverMenu === "editar"){
              this.router.navigate([`/tabs/contact-list/contact-form/${this.contactId}`]);
            }else if(data.data.fromPopoverMenu === "remover"){
              this.removeContactConfirm();
            }
          }
        }
    )

    return await popover.present();
  }

}
