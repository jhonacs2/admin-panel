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
      console.log(this._getImageUrl(value.data.img))
    })
  }

  private _getImageUrl(imgSrc: string): string {
    console.log('llegada', imgSrc)
    if (!imgSrc) {
      return `/upload/usuarios/no-image`;
    } else if (imgSrc.includes('https')) {
      return imgSrc;
    } else if (imgSrc) {
      console.log(imgSrc)
      return `/upload/usuarios/${imgSrc}`;
    } else {
      return `/upload/usuarios/no-image`;
    }
  }

  public logout(): void {

  }
}
