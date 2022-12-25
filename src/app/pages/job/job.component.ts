import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  constructor(private fb:FormBuilder,private user:UserService,private router:Router){}
  myForm!:FormGroup


  createForm(){
    this.myForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      position:['',[Validators.required,Validators.minLength(5)]],
      availableDate:['',Validators.required],
      salary:['',[Validators.required,Validators.min(5000),Validators.max(20000)]],
      codePhone:['010',Validators.required],
      phoneNumber:['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
      birthDay:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      maritalStatus:['married',Validators.required],
      file:['',Validators.required],
      address:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  submitForm(){
    console.log(this.myForm.value);
    this.user.userData = this.myForm
    this.router.navigate(['thanks'])
  }

  ngOnInit(): void {
    this.createForm()
  }

}
