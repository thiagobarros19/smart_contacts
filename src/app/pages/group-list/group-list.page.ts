import { Component, OnInit } from '@angular/core';

import { Group } from 'src/interfaces';

import { GroupsService } from 'src/app/service/groups/groups.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.page.html',
  styleUrls: ['./group-list.page.scss'],
})
export class GroupListPage implements OnInit {

  activeSearchbar: boolean;
  groups: Group[];
  searchText: string;

  constructor(
    private groupsService: GroupsService
  ) {
    this.activeSearchbar = false;
    this.groups = [];
    this.searchText = "";
  }

  ngOnInit() {
    this.getGroupList();
  }

  getGroupList(): void {
    this.groupsService.getGroups().subscribe(
      response => {
        this.groups = response;
      },
      err => {
        console.log(err);
      }
    )
  }

  changeStatusSearchbar(): void {
    this.searchText = "";
    this.activeSearchbar = !this.activeSearchbar;
  }

}
