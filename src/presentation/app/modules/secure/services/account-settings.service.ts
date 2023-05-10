import {Injectable} from '@angular/core';

@Injectable()
export class AccountSettingsService {

  private _linkTheme: Element | null;
  private _link: NodeListOf<Element>;

  constructor() {
    this._linkTheme = document.querySelector('#theme');
    this._link = document.querySelectorAll('.selector');
    this.initTheme();
  }

  public initTheme(): void {
    const urlTheme = localStorage.getItem('theme') || '/assets/css/colors/default-dark.css';
    this._linkTheme?.setAttribute('href', urlTheme);
  }

  public updateTheme(color: string): void {
    const url = `./assets/css/colors/${color}.css`;
    this._linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url)
  }
}
