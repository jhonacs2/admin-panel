import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {AccountSettingsService} from '../../services/account-settings.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  @ViewChildren('themeColors') public queryThemeColors!: QueryList<ElementRef<HTMLLinkElement>>;


  constructor(private _accountSettingsService: AccountSettingsService, private _router: Router) {
  }

  ngOnInit(): void {
    sessionStorage.setItem('lastRoute', this._router.url);
  }

  public changeTheme(value: string, elem: MouseEvent): void {
    this.removeClassWorking();
    const themeSelected = elem.target as HTMLInputElement;
    themeSelected.classList.add('working');
    this._accountSettingsService.updateTheme(value);
  }

  private removeClassWorking(): void {
    this.queryThemeColors.forEach(htmlElement => {
      htmlElement.nativeElement.classList.remove('working');
    });
  }
}
