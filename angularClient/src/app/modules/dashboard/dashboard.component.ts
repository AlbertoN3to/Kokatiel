import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales/sales.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  response;
  pieChartLabels = [];
  pieChartData = [];
  //doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  //doughnutChartData = [120, 150, 180, 90];

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.salesService.getSales().subscribe((data) => {
      this.response = data;

      this.response.sort(function(a, b) {
        return b.count-a.count;
      })

      this.response.map((e, i) => {
        if(i >= 4) {
          return;
        }
        this.pieChartLabels.push(e._id);
        this.pieChartData.push(e.count);
      });
    })
  }

}
