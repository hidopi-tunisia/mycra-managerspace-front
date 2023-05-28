import { Component, OnInit ,ViewChild} from '@angular/core'
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { colors } from 'app/colors.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Color Variables
  private primaryColorShade = '#836AF9';
  private yellowColor = '#ffe800';
  private successColorShade = '#28dac6';
  private warningColorShade = '#ffe802';
  private warningLightColor = '#FDAC34';
  private infoColorShade = '#299AFF';
  private greyColor = '#4F5D70';
  private blueColor = '#2c9aff';
  private blueLightColor = '#84D0FF';
  private greyLightColor = '#EDF1F4';
  private tooltipShadow = 'rgba(0, 0, 0, 0.25)';
  private lineChartPrimary = '#666ee8';
  private lineChartDanger = '#ff4961';
  private labelColor = '#6e6b7b';
  private grid_line_color = 'rgba(200, 200, 200, 0.2)'; // RGBA color helps in dark layout
  constructor() {}

  public contentHeader: object


   /**
   * Marker with Tooltip Component
   */
   @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

   public markerZoom = 12;
   public streetZoom = 12;
   public markerCenter: google.maps.LatLngLiteral = {
     lat: 47.4073,
     lng: 7.76
   };
 
   public markers: object[] = [
     {
       position: {
         lat: 47.4073,
         lng: 7.76
       },
       options: {
         draggable: true
       },
       label: 'A'
     },
     {
       position: {
         lat: 47.3769,
         lng: 7.7417
       },
       options: {
         draggable: true
       },
       label: 'B'
     }
   ];
 
   /**
    * Marker with Tooltip Component
    * @param marker
    */
   openInfo(marker: MapMarker) {
     this.infoWindow.open(marker);
   }
   // line chart
  public lineChart = {
    chartType: 'line',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: false,
      hover: {
        mode: 'label'
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: this.tooltipShadow,
        backgroundColor: colors.solid.white,
        titleFontColor: colors.solid.black,
        bodyFontColor: colors.solid.black
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            gridLines: {
              display: true,
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color
            },
            ticks: {
              fontColor: this.labelColor
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: this.labelColor
            },
            gridLines: {
              display: true,
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color
            }
          }
        ]
      },
      layout: {
        padding: {
          top: -15,
          bottom: -25,
          left: -15
        }
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 9
        }
      }
    },

    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
    datasets: [
      {
        data: [80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360, 375],
        label: 'Europe',
        borderColor: this.lineChartDanger,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: this.lineChartDanger,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: colors.solid.white,
        pointHoverBackgroundColor: this.lineChartDanger,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: this.tooltipShadow
      },
      {
        data: [80, 125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200, 280],
        label: 'Asia',
        borderColor: this.lineChartPrimary,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: this.lineChartPrimary,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: colors.solid.white,
        pointHoverBackgroundColor: this.lineChartPrimary,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: this.tooltipShadow
      },
      {
        data: [80, 99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
        label: 'Africa',
        borderColor: this.warningColorShade,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: this.warningColorShade,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: colors.solid.white,
        pointHoverBackgroundColor: this.warningColorShade,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: this.tooltipShadow
      }
    ]
  };
 // lineArea Chart
 public lineAreaChart = {
  chartType: 'line',

  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'top',
      align: 'start',
      labels: {
        usePointStyle: true,
        padding: 25,
        boxWidth: 9
      }
    },
    layout: {
      padding: {
        top: -20,
        bottom: -20,
        left: -20
      }
    },
    tooltips: {
      // Updated default tooltip UI
      shadowOffsetX: 1,
      shadowOffsetY: 1,
      shadowBlur: 8,
      shadowColor: this.tooltipShadow,
      backgroundColor: colors.solid.white,
      titleFontColor: colors.solid.black,
      bodyFontColor: colors.solid.black
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            color: 'transparent',
            zeroLineColor: this.grid_line_color
          },
          scaleLabel: {
            display: true
          },
          ticks: {
            fontColor: this.labelColor
          }
        }
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            color: 'transparent',
            zeroLineColor: this.grid_line_color
          },
          ticks: {
            stepSize: 100,
            min: 0,
            max: 400,
            fontColor: this.labelColor
          },
          scaleLabel: {
            display: true
          }
        }
      ]
    }
  },
  labels: [
    '7/12',
    '8/12',
    '9/12',
    '10/12',
    '11/12',
    '12/12',
    '13/12',
    '14/12',
    '15/12',
    '16/12',
    '17/12',
    '18/12',
    '19/12',
    '20/12',
    ''
  ],
  datasets: [
    {
      label: 'Africa',
      data: [40, 55, 45, 75, 65, 55, 70, 60, 100, 98, 90, 120, 125, 140, 155],
      lineTension: 0,
      backgroundColor: this.blueColor,
      pointStyle: 'circle',
      borderColor: 'transparent',
      pointRadius: 0.5,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 5,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: this.blueColor,
      pointHoverBorderColor: colors.solid.white
    },
    {
      label: 'Asia',
      data: [70, 85, 75, 150, 100, 140, 110, 105, 160, 150, 125, 190, 200, 240, 275],
      lineTension: 0,
      backgroundColor: this.blueLightColor,
      pointStyle: 'circle',
      borderColor: 'transparent',
      pointRadius: 0.5,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 5,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: this.blueLightColor,
      pointHoverBorderColor: colors.solid.white
    },
    {
      label: 'Europe',
      data: [240, 195, 160, 215, 185, 215, 185, 200, 250, 210, 195, 250, 235, 300, 315],
      lineTension: 0,
      backgroundColor: this.greyLightColor,
      pointStyle: 'circle',
      borderColor: 'transparent',
      pointRadius: 0.5,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 5,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: this.greyLightColor,
      pointHoverBorderColor: colors.solid.white
    }
  ]
};

   //** To add spacing between legends and chart
  public plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20;
        };
      }
    }
  ];

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Home',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Sample',
            isLink: false
          }
        ]
      }
    }
  }
}
