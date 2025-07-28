import { Component } from '@angular/core'
import { ChartOptions } from '@common/apexchart.model'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
    selector: 'app-earning-report',
    imports: [NgApexchartsModule],
    templateUrl: './earning-report.component.html',
    styles: ``
})
export class EarningReportComponent {
  earningReport: Partial<ChartOptions> = {
    series: [
      {
        name: 'Earnings',
        type: 'column',
        data: [180, 520, 376, 420, 520, 580, 435, 515, 480, 350, 310, 230],
      },
      {
        name: 'Actions',
        type: 'area',
        data: [180, 520, 376, 220, 520, 680, 235, 515, 738, 454, 525, 230],
      },
    ],
    chart: {
      redrawOnWindowResize: true,
      parentHeightOffset: 0,
      height: 300,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '25%',
        borderRadius: 2,
        colors: {
          ranges: [
            {
              from: 400,
              to: 500,
              color: '#287F71',
            },
            {
              from: 0,
              to: 40,
              color: '#522c8f',
            },
          ],
        },
      },
    },
    grid: {
      // borderColor: "#f1f1f1",
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [0, 2, 1.9],
      curve: 'straight',
      dashArray: [0, 0, 6],
    },
    legend: {
      show: true,
      fontSize: '13px',
      position: 'top',
      horizontalAlign: 'right',
      fontWeight: 500,
      height: 40,
      offsetX: 0,
      offsetY: 20,
      labels: {
        colors: '#9ba5b7',
      },
      markers: {
        strokeWidth: 0,
        fillColors: undefined,
        offsetX: 0,
        offsetY: 0,
      },
    },
    colors: ['#287F71', '#287F71'],
    yaxis: {
      labels: {
        formatter: function (y) {
          return y.toFixed(0) + ''
        },
        show: true,
        style: {
          colors: '#001b2f',
          fontWeight: 500,
        },
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Agu',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      axisBorder: {
        show: true,
        color: '#ced4da',
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#ced4da',
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        rotate: -90,
        style: {
          colors: '#001b2f',
          fontWeight: 500,
        },
      },
    },
    fill: {
      type: ['solid', 'gradient', 'solid'],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
        colorStops: [
          [
            {
              offset: 0,
              color: '#287F71',
              opacity: 1,
            },
            {
              offset: 75,
              color: '#287F71',
              opacity: 0.2,
            },
            {
              offset: 100,
              color: '#287F71',
              opacity: 0.4,
            },
          ],
          [
            {
              offset: 0,
              color: '#287F71',
              opacity: 0.1,
            },
            {
              offset: 75,
              color: '#287F71',
              opacity: 0.2,
            },
            {
              offset: 100,
              color: '#287F71',
              opacity: 0.4,
            },
          ],
          [
            {
              offset: 0,
              color: '#287F71',
              opacity: 1,
            },
            {
              offset: 75,
              color: '#287F71',
              opacity: 0.2,
            },
            {
              offset: 100,
              color: '#287F71',
              opacity: 0.4,
            },
          ],
        ],
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0)
          }
          return y
        },
      },
    },
  }
}
