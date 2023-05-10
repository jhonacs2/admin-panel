import {Component, OnInit} from '@angular/core';
import {AccountSettingsService} from '../services/account-settings.service';

declare function customInitFunctions(): void;


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {


  constructor(private _accountSettingsService: AccountSettingsService) {
  }

  ngOnInit(): void {
    customInitFunctions();
  }
}
