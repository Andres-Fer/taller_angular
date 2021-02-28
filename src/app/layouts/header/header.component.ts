import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // isAutenticated=false;
  constructor(

    // privatetokenService: TokenService
  ) { }

  ngOnInit(): void {

    //if () this.tokenService.getToken()){this.isAutenticated=true}
    //this.tokenService.tokenObservable.suscribe((token)=>{
      // if(token){
      //   this.isAuthenticated=true;
      // }else{
      //   this.isAuthenticated=false;
      // }
    // });
  }

}
