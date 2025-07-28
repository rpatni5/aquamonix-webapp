import { Component } from '@angular/core'
import { ChartOptions } from '@common/apexchart.model'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
    selector: 'app-top-session',
    imports: [NgApexchartsModule],
    templateUrl: './top-session.component.html',
    styles: ``
})
export class TopSessionComponent {
  sessionChart: Partial<ChartOptions> = {
    series: [
      {
        name: 'Chrome',
        data: [[30, 25, 50, 50]],
      },
      {
        name: 'Firefox',
        data: [[10, 35, 55, 60]],
      },
      {
        name: 'Safari',
        data: [[5, 15, 40, 50]],
      },
      {
        name: 'Opera',
        data: [[20, 40, 65, 60]],
      },
      {
        name: 'Chromium',
        data: [[20, 10, 55, 70]],
      },
    ],
    chart: {
      height: 333,
      type: 'bubble',
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    grid: {
      // borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#287F71', '#522c8f', '#f59440', '#73bbe2', '#73bbe2'],
    legend: {
      show: true,
      fontSize: '13px',
      labels: {
        colors: '#959595',
      },
    },
    xaxis: {
      min: 0,
      max: 40,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      max: 50,
      labels: {
        show: false,
      },
    },
  }
}
