import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

interface MenuItem {
  title: string;
  value: string
}

@Component({
  selector: 'app-contact-menu-popover',
  templateUrl: './contact-menu-popover.component.html',
  styleUrls: ['./contact-menu-popover.component.scss'],
})
export class ContactMenuPopoverComponent implements OnInit {

  options: MenuItem[] = [
    {
      title: "Editar contato",
      value: "editar"
    },
    {
      title: "Remover contato",
      value: "remover"
    }
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
