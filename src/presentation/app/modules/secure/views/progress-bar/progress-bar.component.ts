import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ProgressBarComponent implements OnInit {

  public progress1: number;
  public progress2: number;

  constructor(private _router: Router) {
    this.progress1 = 25;
    this.progress2 = 25;
  }

  ngOnInit(): void {
    sessionStorage.setItem('lastRoute', this._router.url);
  }
}
