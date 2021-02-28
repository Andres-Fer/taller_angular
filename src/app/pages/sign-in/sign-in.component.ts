import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';
import {AuthenticationService} from 'src/app/services/authentication.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  
  signInForm: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    //private authenticationService: AuthenticationService,
    //private tokenService: TokenService,
    //private route: Router
    ) { }

    ngOnInit(): void {
      this.signInForm=this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })

}

// onSubmit() {    
//   if(this.signInForm.valid){
//     const {email,password}=this.signInForm.value;
//     this.authenticationService.singInWhitEmailAndPassword(email,password).subscribe(
//       (token: any)=>{
//        this.tokenService.saveToken(token.jwt);
//        console.log('token',token);
//        this.router.navigate(['/home])},
//       (error)=>{console.error('error autenticando cliente: ', error)}
//     );
//   }
//   else{
//     console.log('form ',this.signInForm);
//     //swal('error','verifique la informacion del formulario','error');


//   }


// }



}
