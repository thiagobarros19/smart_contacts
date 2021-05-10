import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

import { ContactsService } from 'src/app/service/contacts/contacts.service';
import { NumberContact } from 'src/interfaces';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.page.html',
  styleUrls: ['./contact-form.page.scss'],
})
export class ContactFormPage implements OnInit {

  public contactId: number;
  public title: string;

  public routerPath: string;
  public contact: FormGroup;
  public phoneNumber: FormArray;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    this.contactId = parseInt(this.route.snapshot.params.id);
    this.setStatusPage(this.contactId);
    this.contact = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      contact: this.formBuilder.array([ this.createPhone() ]),
      email: this.formBuilder.control('', [Validators.required]),
    });
  }

  setStatusPage(id: number): void {
    if(id === 0){
      this.routerPath = "/tabs/contact-list";
      this.title = "Novo contato";
    }else{
      this.routerPath = `/tabs/contact-list/contact/${id}`;
      this.title = "Editar contato";
      this.getContactById(id);
    }
  }

  setPhone(contacts: NumberContact[]){
    this.phoneNumber = this.contact.get('contact') as FormArray;
    this.phoneNumber.clear();
    contacts.map(contact => {
      this.phoneNumber.push(this.formBuilder.group({
        number: contact.number,
        whatsapp: contact.whatsapp,
      }));
    })
  }

  createPhone(): FormGroup {
    return this.formBuilder.group({
      number: this.formBuilder.control('', [Validators.required]),
      whatsapp: this.formBuilder.control(false, [Validators.required]),
    });
  }

  addPhone(): void {
    this.phoneNumber = this.contact.get('contact') as FormArray;
    this.phoneNumber.push(this.createPhone());
  }

  getContactById(id: number): void {
    this.contactsService.getContactsById(id).subscribe(
      response => {
        this.contact.controls['name'].setValue(response.name);
        this.contact.controls['email'].setValue(response.email);

        this.setPhone(response.contact);
      },
      err => {
        console.log(err);
      }
    )
  }

  handleSaveContact(): void {
    if(this.contactId){
      this.editContact();
    }else{
      this.saveContact();
    }
  }

  saveContact(): void{
    if(this.contact.valid){
      this.contactsService.postContacts(this.contact.value).subscribe(
        response => {
          if(response) this.router.navigate([`${this.routerPath}`])
        },
        err => {
          console.log(err);
        }
      );
    }else{
      console.log("Preencha todos os campos")
    }
  }

  editContact(): void{
    this.contactsService.patchContacts(this.contactId, this.contact.value).subscribe(
      response => {
        if(response) this.router.navigate([`${this.routerPath}`])
      },
      err => {
        console.log(err);
      }
    );
  }
}
