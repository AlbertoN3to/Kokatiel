import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';


import { DashboardComponent } from './dashboard.component';
import { UtilsModule } from '../../utils/utils.module';
import { PieChartService } from 'src/app/services/pie-chart.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    ChartsModule
  ],
  exports: [
    DashboardComponent,
    UtilsModule,
    ChartsModule
  ],
  providers: [PieChartService]
})
export class DashboardModule { }
