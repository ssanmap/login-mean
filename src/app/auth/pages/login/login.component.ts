import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  miForm: FormGroup = this.fb.group({
    email: ['e@e.cl', [Validators.required, Validators.email]],
    password: ['seba33', [Validators.required, Validators.minLength(6)]],
    

  });

  constructor(private fb: FormBuilder,
    private router: Router,
  private authservice:AuthService) { }

  ngOnInit(): void {
  }
  login() {
    console.log(this.miForm.value);
    const { email, password } = this.miForm.value;

    this.authservice.login(email, password)
      .subscribe(ok => {
        //console.log(ok)
        if (ok === true) {
         this.router.navigateByUrl('/dashboard')
        } else {
         Swal.fire('Error', ok, 'error')
       }
      })
     
  }

  

}
