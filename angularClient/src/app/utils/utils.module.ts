import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';


import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { AverageDataComponent } from './components/average-data/average-data.component';

@NgModule({
  declarations: [
    DoughnutChartComponent,
    AverageDataComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    DoughnutChartComponent,
    AverageDataComponent,
    ChartsModule
  ]
})
export class UtilsModule { }
