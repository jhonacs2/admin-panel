import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-increments',
  templateUrl: './increments.component.html',
  styleUrls: ['./increments.component.scss']
})
export class IncrementsComponent implements OnInit {
  @Input() progress: number;
  @Input() btnClass: string;

  @Output() changeIncrementEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.progress = 50;
    this.btnClass = 'btn-primary';
  }

  get getPercentage(): string {
    return `${this.progress}%`;
  }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  onChange(newValue: number): void {

    if (newValue >= 100) {
      this.progress = 100;
    }
    if (newValue <= 0) {
      this.progress = 0;
    }

    this.progress = newValue;

    this.changeIncrementEvent.emit(this.progress);
  }

  public changeValue(valor: number): number {

    if (this.progress >= 100 && valor >= 0) {
      this.changeIncrementEvent.emit(100);
      return this.progress = 100;
    }

    if (this.progress <= 0 && valor < 0) {
      this.changeIncrementEvent.emit(0);
      return this.progress = 0;
    }
    this.changeIncrementEvent.emit(this.progress += valor);
    return this.progress += valor;
  }
}
