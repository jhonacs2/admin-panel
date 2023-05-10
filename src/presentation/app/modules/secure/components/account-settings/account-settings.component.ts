import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {AccountSettingsService} from '../../services/account-settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent {
  @ViewChildren('themeColors') public queryThemeColors!: QueryList<ElementRef<HTMLLinkElement>>;


  constructor(private _accountSettingsService: AccountSettingsService) {
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
