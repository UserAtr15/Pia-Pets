import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthService) { 
    this.registerForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
    

  ngOnInit(): void {
  }

  async register(){
    const {email, password} = this.registerForm.value;
    try{
      const user = await this.authService.register(email, password)
      .then(res =>{
        console.log("Usuario Registrado");
        Swal.fire("Usuario registrado")

      });
    } catch (err) {
      console.log(err);
    }
  }
}
