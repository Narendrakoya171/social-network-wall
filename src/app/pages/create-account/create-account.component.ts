import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  constructor( private fb:FormBuilder){}

  createaccount=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    userName:['',[Validators.required,Validators.maxLength(10)]],
    password:['',[Validators.required,Validators.maxLength(6)]]
  })
}
