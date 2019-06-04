import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input('chartData') public data;
  @Input('chartLabels') public labels;
  public type = 'pie';
  public colors = [
    {
      backgroundColor: ['rgb(226, 27, 106)', 'rgb(187, 27, 226)', 'rgb(35, 79, 255)', 'rgb(152, 244, 66)'],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
