import { Component, OnInit } from '@angular/core';
import { PieChartService } from 'src/app/services/pie-chart.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  response;
  doughnutChartLabels = [];
  doughnutChartData = [];
  //doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  //doughnutChartData = [120, 150, 180, 90];

  constructor(private pieChartService: PieChartService) { }

  ngOnInit() {
    this.pieChartService.getSales().subscribe((data) => {
      this.response = data;

      this.response.forEach(element => {
        this.doughnutChartLabels.push(element._id);
        this.doughnutChartData.push(element.count);
      });
    })
  }

}
