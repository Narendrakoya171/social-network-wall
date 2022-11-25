import { UsersService } from './../../service/users.service';
import { Component } from '@angular/core';
import{FormBuilder,Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder,public Users:UsersService,private snackabar:MatSnackBar){

  }
  loginFrom=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })

  login(){
    return this.Users.loginuser(this.loginFrom.value.email!).then((res :any)=>{
      console.log(res)
      if(res.length==0){
        this.snackabar.open('account doesnt exist.','ok')
          //console.log("account doesn't exist.")
      }else{
        if(res[0].password==this.loginFrom.value.password){
          this.snackabar.open('matched','ok') ;
        }else{
          this.snackabar.open('password not matched','ok') ;
          //console.log("password not matched")
        }

      }
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
}
