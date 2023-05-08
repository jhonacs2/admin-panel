import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../../../../../domain/models/auth/user.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../state/app.state';
import {Subject, takeUntil} from 'rxjs';
import {selectUserData} from '../../../../state/selectors/user.selector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profileForm: FormGroup;
  public userDetails!: UserModel;

  private _unsubscribe$: Subject<void>;

  constructor(private _formBuilder: FormBuilder, private _store: Store<AppState>) {
    this._unsubscribe$ = new Subject<void>();
    this.profileForm = this._formBuilder.group({});
  }

  ngOnInit(): void {
    this._initialize();
    this.profileForm = this._formBuilder.group({
      name: [this.userDetails.name || '', Validators.required],
      email: [this.userDetails.email || '', [Validators.required, Validators.email]]
    });
  }

  public updateProfile(): void {

  }

  public changeImage(image?: Event) {
    const inputFile = image?.target as HTMLInputElement;
    console.log(inputFile.files?.item(0))
  }

  private _initialize(): void {
    this._store.select(selectUserData)
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(({data}) => this.userDetails = data);
  }

  protected readonly HTMLInputElement = HTMLInputElement;
}
