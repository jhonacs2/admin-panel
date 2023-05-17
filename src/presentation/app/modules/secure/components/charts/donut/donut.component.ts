import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements AfterViewInit {
  @ViewChild('doughnut') public htmlCanvas!: ElementRef<HTMLCanvasElement>;

  constructor() {
  }

  ngAfterViewInit(): void {
    const dataDonut = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
    new Chart(this.htmlCanvas.nativeElement, {
      type: 'doughnut',
      data: dataDonut
    });
  }
}
