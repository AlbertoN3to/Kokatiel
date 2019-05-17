import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  @Input('chartData') public data;
  @Input('chartLabels') public labels;
  public dataType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
