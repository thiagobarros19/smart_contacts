import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.page.html',
  styleUrls: ['./group-form.page.scss'],
})
export class GroupFormPage implements OnInit {

  public contactId: number;
  public title: string;

  public group: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.contactId = parseInt(this.route.snapshot.params.id);
    this.setStatusPage(this.contactId);
    this.group = this.formBuilder.group({
      name: '',
    });
  }

  setStatusPage(id: number): void {
    if(id === 0){
      this.title = "Novo grupo";
    }else{
      this.title = "Editar grupo";
    }
  }

  saveContact(): void{
    console.log(this.group.value);
  }

}
