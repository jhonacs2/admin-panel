import {Component, OnInit} from '@angular/core';

declare function customInitFunctions(): void;


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  ngOnInit(): void {
    customInitFunctions()
  }
}
