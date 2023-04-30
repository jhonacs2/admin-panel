import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthLoginUseCase} from "../../../../../domain/usecases/auth/auth-login-use.case";
import {RenewTokenUseCase} from "../../../../../domain/usecases/auth/renew-token-use.case";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _authLoginUseCase: AuthLoginUseCase,
              private _renewTokenUseCase: RenewTokenUseCase) {
    this.loginForm = this._formBuilder.group({
      email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    })
  }

  login(): void {
    this
      ._renewTokenUseCase
      .execute({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzgzOTBiMjMzOTVhNzY1NTQxNzVmNWUiLCJpYXQiOjE2ODI4MjAzMDksImV4cCI6MTY4Mjg2MzUwOX0.6GFHiyeQ16pca_IqxQE33qBptRNrQznz1uHVcO6fSpM'})
      .subscribe(value => {
        console.log(value)
      })
    // this._authLoginUseCase.execute({password: '123', email: 'test100@gmail.com'}).subscribe(value => {
    //   console.log(value)
    // })
  }
}
