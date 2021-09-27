import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  miForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    name: ['', [Validators.required, Validators.minLength(6)]],
    

  });

  constructor(private fb: FormBuilder,
    private router: Router,
  private authservice:AuthService) { }

  ngOnInit(): void {
  }
  register() {
    console.log(this.miForm.value)
    const { email, name, password } = this.miForm.value;
    this.authservice.registro(name, email, password)
      .subscribe(ok => {
        if (ok === true) {
          this.router.navigate(['/dashboard'])
        } else {
          alert('error')
        }
      })
    
   
  }

}
