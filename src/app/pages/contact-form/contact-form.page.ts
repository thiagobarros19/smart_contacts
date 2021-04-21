import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.page.html',
  styleUrls: ['./contact-form.page.scss'],
})
export class ContactFormPage implements OnInit {

  public contactId: number;
  public title: string;

  public router: string;
  public contact: FormGroup;
  public phoneNumber: FormArray;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.contactId = parseInt(this.route.snapshot.params.id);
    this.setStatusPage(this.contactId);
    this.contact = this.formBuilder.group({
      name: '',
      phone: this.formBuilder.array([ this.createPhone() ]),
      email: '',
    });
  }

  setStatusPage(id: number): void {
    if(id === 0){
      this.router = "/tabs/contact-list";
      this.title = "Novo contato";
    }else{
      this.router = `/tabs/contact-list/contact/${id}`;
      this.title = "Editar contato";
    }
  }

  createPhone(): FormGroup {
    return this.formBuilder.group({
      number: '',
      whatsapp: false,
    });
  }

  addPhone(): void {
    this.phoneNumber = this.contact.get('phone') as FormArray;
    this.phoneNumber.push(this.createPhone());
  }

  saveContact(): void{
    console.log(this.contact.value);
  }

}
