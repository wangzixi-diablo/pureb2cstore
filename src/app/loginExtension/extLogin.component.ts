import { Component } from '@angular/core';
//import { LoginComponent } from '@spartacus/user/account/components/login/login.component';
import { LoginComponent } from '@spartacus/storefront';

@Component({
  selector: 'jerry-login',
  templateUrl: './extLogin.component.html',
})
export class ExtLoginComponent extends LoginComponent{
}
 
