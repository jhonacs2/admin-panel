import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements AfterViewInit {
  @ViewChild('doughnut') public htmlCanvas!: ElementRef<HTMLCanvasElement>;

  @Input() public label: string[];
  @Input() public dataset: { backgroundColor: string[]; data: number[]; hoverOffset: number; label: string }[];

  constructor() {
    this.label = [];
    this.dataset = [];
  }

  ngAfterViewInit(): void {
    const dataDonut = {
      labels: this.label,
      datasets: this.dataset,
    };
    new Chart(this.htmlCanvas.nativeElement, {
      type: 'doughnut',
      data: dataDonut
    });
  }
}
