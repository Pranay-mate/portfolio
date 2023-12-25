import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import VerticalChart from './vertical.js'

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.data,
      chartOptions: props.options
    };
  }

  static defaultProps = {
    displayTitle: true,
    DisplayLegend: true,
    LegendPosition: "top",
    level: "Skills",
    data: {
      labels: ["PHP/LARAVEL", "NestJs","VueJs","ReactJs","NextJs","TypeScript","MySql","Git/BitBucket"],
      datasets: [
        {
          data: [4,3,2,3,2,3,3,3,0],
          backgroundColor: [
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 235, 0.6)",
            "rgba(255, 159, 132, 0.6)",
            "rgba(255, 99, 132, 0.6)",
            "rgba(100, 30, 55, 0.6)",
            "rgba(255, 159, 32, 0.6)",
            "rgba(255, 99, 92, 0.6)"
          ],
            label: false
        }
        /* {
          data: [90, 90, 60, 70, 60, 70, 100, 55, 80, 40, 30, 20, 10, 0],
          backgroundColor: "#FF7",
          label: 2016
      }*/
      ]
    },

    options: {
      legend: {
           display: false,
       },
      scales: {
        xAxes: [
          {
            ticks: {
              fontSize: 9,
              fontWeight:100,
              font: {
              family: "Candara"
              },
              fontColor: '#fff',
             fontStyle: '300',
              maxTicksLimit: 5,
              barThickness: 20,
               maxBarThickness: 20,
              callback: function(label, index, labels) {
                console.log("label is: " );
                if (label === 4) {
                  return "Expert" ;
                } else if (label === 3) {
                  return "Advanced";
                } else if (label === 2) {
                  return "Intermediate " ;
                } else if (label === 1) {
                  return "Beginner" ;
                } else {
                  return '';
                }
                //                         return '$' + label;
              }
            }
          }
        ],yAxes: [
          {
            ticks: {
              fontSize: 7.6,
              fontWeight:50,
              font: {
              family: "Candara"
              },
              fontColor: '#fff',
             fontStyle: '550'
            }}],
      },tooltips: {
        enabled: false,

        },


    }
  };
  render() {
    return (
      <div className='bars'>
      <div className='d-none d-lg-block'>
        <VerticalChart />
      </div>
      <div className='d-lg-none'>

      <HorizontalBar height='270px' data={this.state.chartData} options={this.state.chartOptions}/>
      </div>
      </div>

    );
  }
}

export default Chart;