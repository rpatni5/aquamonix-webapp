import { Component } from '@angular/core'
import { ChartOptions } from '@common/apexchart.model'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
    selector: 'app-stats',
    imports: [NgApexchartsModule],
    templateUrl: './stats.component.html',
    styles: ``
})
export class StatsComponent {
  websiteTraffic: Partial<ChartOptions> = {
    series: [
      {
        data: [15, 25, 20, 35, 60, 30, 20, 30, 20, 35, 25, 20, 55, 45, 22],
      },
    ],
    chart: {
      height: 45,
      type: 'bar',
      sparkline: {
        enabled: true,
      },
      animations: {
        enabled: false,
      },
    },
    colors: ['#135046', '#cbe0dd'],
    plotOptions: {
      bar: {
        columnWidth: '50%',
        distributed: true,
        borderRadius: 3,
        barHeight: '38%',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      strokeDashArray: 4,
    },
    labels: ['1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15'],
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      labels: {
        padding: 4,
      },
    },
    tooltip: {
      theme: 'light',
    },
    legend: {
      show: false,
    },
  }
  converationRate: Partial<ChartOptions> = {
    series: [
      {
        name: 'Desktops',
        data: [25, 25, 55, 55, 20, 20, 60, 60, 35, 35, 60, 60, 15, 15],
      },
    ],
    chart: {
      height: 45,
      type: 'area',
      sparkline: {
        enabled: true,
      },
      animations: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        top: 10,
        left: 0,
        blur: 2,
        color: '#f0f4f7',
        opacity: 0.3,
      },
    },
    colors: ['#ec344c'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
  }
  sessionDuration: Partial<ChartOptions> = {
    series: [
      {
        name: 'Desktops',
        data: [25, 25, 68, 68, 2, 2, 50, 50, 25, 25, 55, 55, 89, 89],
      },
    ],
    chart: {
      height: 45,
      type: 'area',
      sparkline: {
        enabled: true,
      },
      animations: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        top: 10,
        left: 0,
        blur: 2,
        color: '#f0f4f7',
        opacity: 0.3,
      },
    },
    colors: ['#287F71'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
  }
  user: Partial<ChartOptions> = {
    series: [
      {
        data: [15, 25, 20, 35, 60, 30, 20, 30, 20, 35, 25, 20, 55, 45, 22],
      },
    ],
    chart: {
      height: 45,
      type: 'bar',
      sparkline: {
        enabled: true,
      },
      animations: {
        enabled: false,
      },
    },
    colors: ['#ec8290', '#2786f1'],
    plotOptions: {
      bar: {
        columnWidth: '50%',
        distributed: true,
        borderRadius: 3,
        barHeight: '38%',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      strokeDashArray: 4,
    },
    labels: ['1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15'],
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      labels: {
        padding: 4,
      },
    },
    tooltip: {
      theme: 'light',
    },
    legend: {
      show: false,
    },
  }
  dailySales: Partial<ChartOptions> = {
    chart: {
      height: 82,
      type: 'area',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    markers: {
      strokeColors: 'transparent',
    },
    colors: ['#287F71'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.8,
        opacityFrom: 0.5,
        opacityTo: 0.3,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    series: [
      {
        data: [400, 100, 650, 500],
      },
    ],
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    grid: {
      show: false,
    }
  }
}
