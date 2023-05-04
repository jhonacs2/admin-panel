import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../../state/app.state";
import {selectUserData} from "../../../../state/selectors/user.selector";
import {DataUser} from "../../../../state/reducers/user.reducer";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  public userData!: DataUser

  constructor(private _store: Store<AppState>) {
  }

  ngOnInit(): void {
    this._store.select(selectUserData).subscribe(value => {
      this.userData = value;
    })
  }
}
