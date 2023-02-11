import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  constructor(private fb: FormBuilder,private auth:AuthService) { }

  ngOnInit(): void {
    // this.loginForm = this.fb.group({
    //   email:['',Validators],
    //   password:['',Validators]
    // }
    // )
    this.auth.getlogin().subscribe((res)=>{
      console.log(res);
      
    })
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),

  });
    
  }
  submit() {
    console.log(this.loginForm.value);
    
    this.auth.login(this.loginForm.value).subscribe((res)=>{
      console.log(res);
      
    })

    

  }

}
