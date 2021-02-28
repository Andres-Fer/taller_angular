import { Injectable } from '@angular/core';
// import {BehaviorSubjet} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  // private jwtToken=new BehaiviorDubjet(null);
  // tokenObservable=jwtToken

  constructor() { 

    //localStorage.setItem('token',token)
  }

  // saveToken(){
  //   localStorage.SetItem('token',token);
  //   this.jwtToken.netx(token);
  // }

  // getToken(){
  //   return localStorage.getItem('token')
  // }

  // removeToken(){
  //   localStorage.removeItem('token');
  //   this.jwtToken.netx(null);
  // }
}
