import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

import { GroupsService } from 'src/app/service/groups/groups.service';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.page.html',
  styleUrls: ['./group-form.page.scss'],
})
export class GroupFormPage implements OnInit {

  public groupId: number;
  public title: string;
  public routerPath: string;

  public group: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private groupsService: GroupsService
    ) { }

  ngOnInit() {
    this.groupId = parseInt(this.route.snapshot.params.id);
    this.setStatusPage(this.groupId);
    this.group = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      edit: this.formBuilder.control(true)
    });

    if(this.groupId) this.getGroupsById(this.groupId);
  }

  getGroupsById(id: number): void {
    this.groupsService.getGroupsById(id).subscribe(
      response => {
        this.group.controls['name'].setValue(response.name);
      },
      err => {
        console.log(err);
      }
    )
  }

  setStatusPage(id: number): void {
    if(id === 0){
      this.routerPath = "/tabs/group-list";
      this.title = "Novo grupo";
    }else{
      this.routerPath = `/tabs/group-list/group/${id}`;
      this.title = "Editar grupo";
    }
  }

  handleSaveGroup(): void {
    if(this.group.valid){
      if(this.groupId){
        this.editGroup();
      }else{
        this.saveGroup();
      }
    }else{
      console.log("Preencha todos os campos obrigatórios")
    }
  }

  editGroup(): void{
    this.groupsService.patchGroups(this.groupId, this.group.value).subscribe(
      response => {
        if(response) this.router.navigate([this.routerPath])
      },
      err => {
        console.log(err);
      }
    )
  }

  saveGroup(): void{
    this.groupsService.postGroups(this.group.value).subscribe(
      response => {
        if(response) this.router.navigate([this.routerPath])
      },
      err => {
        console.log(err);
      }
    )
  }

}
