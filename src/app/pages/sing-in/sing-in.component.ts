import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  singInForm: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit(): void {
    this.singInForm=this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }
  onSubmit() {    
    if(this.singInForm.valid){
      const {email,password}=this.singInForm.value;
      this.authenticationService.singInWhitEmailAndPassword(email,password).subscribe(
        (token)=>{console.log('token',token)},
        (error)=>{console.error('error autenticando cliente: ', error)}
      );
    }
    else{
      console.log('form ',this.singInForm);
      //swal('error','verifique la informacion del formulario','error');


    }


  }
}
