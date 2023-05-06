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

  private unsubscribe$: Subject<void>;

  constructor(private _store: Store<AppState>) {
    this.unsubscribe$ = new Subject();
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
