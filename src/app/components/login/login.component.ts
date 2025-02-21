import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {JwtService} from '../../service/jwt.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router,
  ) { this.loginForm = this.fb.group({}) }


  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })

  }

  submitForm() {
    this.service.login(this.loginForm.value).subscribe(
      (response) => {
        console.log(response.jwtToken);
        if (response.jwtToken != null) {
          alert("Hello, Your token is " + response.jwtToken);
          const jwt_Token = response.jwtToken;
          localStorage.setItem("jwt", jwt_Token);
          this.router.navigateByUrl("/dashboard");
        }
      }
    )
  }
}
