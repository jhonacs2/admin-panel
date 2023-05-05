import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../state/app.state';
import {selectUserData} from '../../../../state/selectors/user.selector';
import {DataUser} from '../../../../state/reducers/user.reducer';
import {logoutUser} from '../../../../state/action/user.actions';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {

  public userData!: DataUser;

  private unsubscribe$: Subject<void>;

  constructor(private _store: Store<AppState>) {
    this.unsubscribe$ = new Subject<void>();
  }

  ngOnInit(): void {
    this._store.select(selectUserData)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => {
        this.userData = value;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public logout(): void {
    this._store.dispatch(logoutUser());
  }
}
