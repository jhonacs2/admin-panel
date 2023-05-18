import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {generateRandomNumber} from '../../../utils/generateRandomNumber.function';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {

  public labelDonut: string[];
  public dataDonut: { backgroundColor: string[]; data: number[]; hoverOffset: number; label: string }[];

  constructor(private _router: Router) {
    this.labelDonut = ['Red', 'Blue', 'Yellow'];
    this.dataDonut = [{
      label: 'My First Dataset',
      data: this._generateArrayNumbers(),
      backgroundColor: [
        this._generateRandomRgb(),
        this._generateRandomRgb(),
        this._generateRandomRgb()
      ],
      hoverOffset: 4
    }];
  }

  ngOnInit(): void {
    sessionStorage.setItem('lastRoute', this._router.url);
  }

  private _generateRandomRgb(): string {
    const r = generateRandomNumber(255);
    const g = generateRandomNumber(255);
    const b = generateRandomNumber(255);
    return `rgb(${r},${g},${b})`;
  }

  private _generateArrayNumbers(): number[] {
    return Array.from({length: 3}, () => generateRandomNumber(300));
  }
}
