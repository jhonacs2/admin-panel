import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../../../../../domain/models/auth/user.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../state/app.state';
import {Subject, takeUntil} from 'rxjs';
import {selectUserData} from '../../../../state/selectors/user.selector';
import {updatePhotoUser} from '../../../../state/action/user.actions';
import {UserTypes} from '../../../../../../base/enums/user-types.enum';
import {AccountSettingsService} from '../../services/account-settings.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('profilePhoto') public profilePhoto!: ElementRef<HTMLImageElement>;

  public profileForm: FormGroup;
  public userDetails!: UserModel;
  public profilePhotoFile!: File;

  private _unsubscribe$: Subject<void>;

  constructor(private _formBuilder: FormBuilder,
              private _store: Store<AppState>) {
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
    this.profilePhotoFile = inputFile.files?.item(0)!;
    this.profilePhoto.nativeElement.src = URL.createObjectURL(inputFile.files?.item(0)!);
  }

  private _initialize(): void {
    this._store.select(selectUserData)
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(({data}) => this.userDetails = data);
  }

  public uploadImage(): void {
    this._store.dispatch(updatePhotoUser({
      userTypes: UserTypes.USUARIO,
      userId: this.userDetails.id,
      file: this.profilePhotoFile
    }));
  }
}
