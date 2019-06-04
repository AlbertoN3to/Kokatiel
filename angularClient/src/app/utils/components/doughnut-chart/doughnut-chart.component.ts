import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  @Input('chartData') public data;
  @Input('chartLabels') public labels;
  public dataType = 'doughnut';
  public doughnutChartColors = [
    {
      backgroundColor: ['rgb(226, 27, 106)', 'rgb(187, 27, 226)', 'rgb(35, 79, 255)', 'rgb(152, 244, 66)'],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
