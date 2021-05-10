import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { PopoverController } from '@ionic/angular';
import { FormGroup, FormBuilder } from "@angular/forms";

import { GroupsService } from 'src/app/service/groups/groups.service';

import { Group } from 'src/interfaces';

import { ContactMenuPopoverComponent } from 'src/app/components/contact-menu-popover/contact-menu-popover.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {

  public groupId: number;
  public group: Group;

  public groupForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private popoverCtrl: PopoverController,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    private groupsService: GroupsService
  ) {
    this.group = {
      name: "",
      edit: true
    }
  }

  ngOnInit() {
    this.groupId = parseInt(this.route.snapshot.params.id);
    this.groupForm = this.formBuilder.group({
      name: '',
    });

    this.getGroupsById(this.groupId);
  }

  getGroupsById(id: number): void {
    this.groupsService.getGroupsById(id).subscribe(
      response => {
        this.group.name = response.name
        this.group.edit = response.edit
      },
      err => {
        console.log(err);
      }
    )
  }

  addContact(): void {
    console.log(this.groupForm.value);
  }

  removeGroup(id: number): void {
    this.groupsService.deleteGroups(id).subscribe(
      response => {
        this.router.navigate(['/tabs/group-list']);
      },
      err => {
        console.log(err);
      }
    )
  }

  async removeGroupConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Smart Contacts',
      message: 'Deseja remover este grupo?',
      buttons: [
        {
          text: 'Não',
          cssClass: 'secondary',
        },
        {
          text: 'Sim',
          handler: () => {
            this.removeGroup(this.groupId);
          }
        }
      ]
    });

    await alert.present();
  }

  async removeContactConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Smart Contacts',
      message: 'Deseja remover este contato do grupo?',
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
          title: "Editar Grupo",
          value: "editar"
        },
        {
          title: "Remover Grupo",
          value: "remover"
        }
      ]},
      event: event
    })

    popover.onDidDismiss().then(
      data => {
        if(data.data){
          if(data.data.fromPopoverMenu === "editar"){
            this.router.navigate([`/tabs/group-list/group-form/${this.groupId}`]);
          }else if(data.data.fromPopoverMenu === "remover"){
            this.removeGroupConfirm();
          }
        }
      }
    )

    return await popover.present();
  }

}
