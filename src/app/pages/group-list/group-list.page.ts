import { Component, OnInit } from '@angular/core';

import { Group } from '../../../interfaces';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.page.html',
  styleUrls: ['./group-list.page.scss'],
})
export class GroupListPage implements OnInit {

  activeSearchbar: boolean;
  groups: Group[];
  searchText: string;

  constructor() {
    this.activeSearchbar = false;
    this.groups = [];
    this.searchText = "";
  }

  ngOnInit() {
    this.groups.push({
      name: "Família"
    });
    this.groups.push({
      name: "Trabalho"
    });
    this.groups.push({
      name: "Amigos"
    });
  }

  changeStatusSearchbar(): void {
    this.searchText = "";
    this.activeSearchbar = !this.activeSearchbar;
  }

}
