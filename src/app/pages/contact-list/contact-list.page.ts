import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {

  activeSearchbar: boolean;

  constructor() {
    this.activeSearchbar = false;
  }

  ngOnInit() {

  }

  changeStatusSearchbar(): void {
    this.activeSearchbar = !this.activeSearchbar;
  }

}
