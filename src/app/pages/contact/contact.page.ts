import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { PopoverController } from '@ionic/angular';

import { Contact } from '../../../interfaces';
import { mask } from '../../../util';

import { ContactMenuPopoverComponent } from 'src/app/components/contact-menu-popover/contact-menu-popover.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  public contactId: number;
  public contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private popoverCtrl: PopoverController,
    public alertController: AlertController
  ) {
    this.contact = {
      name: "",
      phone: [
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
    this.setContact(this.contactId);
  }

  setContact(id: number): void{
    switch (id){
      case 1:
        this.contact.name = "Thiago Silva"
        this.contact.phone[0] = {
          number: mask("celular", "83999741937"),
          whatsapp: true
        };
        this.contact.phone[1] = {
          number: mask("celular", "83999741937"),
          whatsapp: false
        };
        this.contact.email = "thiago.rck00@gmail.com"
        break
      case 2:
        this.contact.name = "Lucas Emmanuel"
        this.contact.phone[0] = {
          number: mask("celular", "83999999999"),
          whatsapp: false
        }
        this.contact.email = "exemplo@exemplo.com"
        break
      case 3:
        this.contact.name = "Weverson Barbosa"
        this.contact.phone[0] = {
          number: mask("celular", "83999999999"),
          whatsapp: false
        }
        this.contact.email = "exemplo@exemplo.com"
        break
    }
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
            console.log('Confirm Okay');
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
