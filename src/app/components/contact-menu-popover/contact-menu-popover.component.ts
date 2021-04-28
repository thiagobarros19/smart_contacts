import { Component, OnInit, Input } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

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

  public options: MenuItem[];

  constructor(
    private popoverCtrl: PopoverController,
    public navParams: NavParams
  ) {
    this.options = this.navParams.data.menuItem;
  }

  ngOnInit() {}

  _dismiss(item: string): void{
    this.popoverCtrl.dismiss({
      "fromPopoverMenu": item
    })
  }

}
