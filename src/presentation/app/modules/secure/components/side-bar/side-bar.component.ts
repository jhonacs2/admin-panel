import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataUser} from '../../../../state/reducers/user.reducer';
import {Subject, takeUntil} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../state/app.state';
import {selectUserData} from '../../../../state/selectors/user.selector';
import {logoutUser} from '../../../../state/action/user.actions';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SideBarComponent implements OnInit {

  public userData!: DataUser;
  public menuItems: any[];

  private unsubscribe$: Subject<void>;

  constructor(private _store: Store<AppState>) {
    this.unsubscribe$ = new Subject();
    this.menuItems = [
      {
        title: 'Dashboard',
        icon: 'mdi mdi-gauge',
        subMenu: [
          {title: 'Main', url: './'},
          {title: 'Graphics', url: 'graphics'},
          {title: 'ProgressBar', url: 'progress'},
          {title: 'Promises', url: 'promises'},
          {title: 'rxjs', url: 'rxjs'}
        ]
      },
      {
        title: 'Mantenimiento',
        icon: 'mdi mdi-folder-lock-open ',
        subMenu: [
          {title: 'Usuarios', url: 'usuarios'},
          {title: 'Hospitales', url: 'hospitales'},
          {title: 'Medicos', url: 'medicos'},
        ]
      }
    ];
  }

  ngOnInit(): void {
    this._store.select(selectUserData)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => {
        this.userData = value;
      });
  }

  public logout(): void {
    this._store.dispatch(logoutUser());
  }
}
