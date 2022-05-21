import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  loginForm: FormGroup;

  constructor( private authService: AuthService) { 
    this.loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });}


  async ingresar() {
    const {email, password } = this.loginForm.value;
    try {
      const user = await this.authService.login(email, password);
    }catch (err) {
      console.log(err);
    }
  }

  async ingresarConGoogle(){
    try {
      const user = await this.authService.loginWithGoogle();
    }catch (err) {
      console.log(err);
    }
  }

  logout() {
    this.authService.logout();
  }
}
