import { Router } from '@angular/router';
import { UsersService } from './../../service/users.service';
import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  constructor( private fb:FormBuilder,public Service:UsersService,private router:Router){}

  createaccount=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    userName:['',[Validators.required,Validators.maxLength(10)]],
    password:['',[Validators.required,Validators.maxLength(6)]]
  })

  create(){
    //console.log(this.createaccount.value)
    this.Service.cretenewuser(this.createaccount.value).then(res=>{
      console.log(res)
      this.Service.user=res;
      localStorage.setItem('user',JSON.stringify(res));
      this.router.navigate(['/posts']);
    }).catch(err=>{
      console.log(err)
    })
  }
}
