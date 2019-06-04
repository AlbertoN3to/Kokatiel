import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';


import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { AverageDataComponent } from './components/average-data/average-data.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    DoughnutChartComponent,
    AverageDataComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    DoughnutChartComponent,
    AverageDataComponent,
    ChartsModule,
    PieChartComponent
  ]
})
export class UtilsModule { }
