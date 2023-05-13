import {Component, OnInit} from '@angular/core';
import {AccountSettingsService} from '../../services/account-settings.service';
import {Router} from '@angular/router';

declare function customInitFunctions(): void;


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {


  constructor(private _accountSettingsService: AccountSettingsService,
              private _router: Router) {
  }

  ngOnInit(): void {
    customInitFunctions();
    const getLastRoute = sessionStorage.getItem('lastRoute') || '';
    getLastRoute && this._router.navigate([getLastRoute]);
  }
}
