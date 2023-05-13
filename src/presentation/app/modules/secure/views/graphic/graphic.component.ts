import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    sessionStorage.setItem('lastRoute', this._router.url);
  }
}
