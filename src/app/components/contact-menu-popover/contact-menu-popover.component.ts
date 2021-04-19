import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-contact-menu-popover',
  templateUrl: './contact-menu-popover.component.html',
  styleUrls: ['./contact-menu-popover.component.scss'],
})
export class ContactMenuPopoverComponent implements OnInit {

  options: string[] = [
    "Editar contato",
    "Remover contato"
  ]

  constructor(
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {}

  _dismiss(item: string): void{
    this.popoverCtrl.dismiss({
      "fromPopoverMenu": item
    })
  }

}
