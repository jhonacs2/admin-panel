import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppState} from "../../../state/app.state";
import {Store} from "@ngrx/store";
import {login, verifyToken} from "../../../state/action/user.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _store: Store<AppState>) {
    this.loginForm = this._formBuilder.group({
      email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    })
  }

  ngOnInit(): void {
    const token = localStorage.getItem("token") || '';
    token && this._store.dispatch(verifyToken({token}))
  }

  login(): void {
    this._store.dispatch(login({...this.loginForm.value}))
  }
}
