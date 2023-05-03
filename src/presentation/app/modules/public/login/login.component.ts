import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppState} from "../../../state/app.state";
import {Store} from "@ngrx/store";
import {login} from "../../../state/action/user.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _store: Store<AppState>) {
    this.loginForm = this._formBuilder.group({
      email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    })
  }

  login(): void {
    this._store.dispatch(login({...this.loginForm.value}))
  }
}
