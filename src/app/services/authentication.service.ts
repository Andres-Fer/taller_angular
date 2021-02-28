import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  singInWhitEmailAndPassword(email:string,passsword:string){

    return this.http.post('http://localhost:3000/clients,auth',{email,passsword})


  }
}
