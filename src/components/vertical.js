import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class VerticalChart extends Component {
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
    //   labels: ["C", "C++", "Java", "Python", "Ansible",'Jenkins', "Shell Scripting", "Market Research","Product Management"],
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
        yAxes: [
          {
            ticks: {
              fontSize: 15,
              fontWeight:50,
              font: {
              family: "Candara"
              },
              fontColor: '#fff',
             fontStyle: '500',
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
        ],xAxes: [
          {
            ticks: {
              fontSize: 12,
              fontWeight:40,
              font: {
              family: "Candara"
              },
              fontColor: '#fff',
             fontStyle: '550'
            }}],
      },tooltips: {
        enabled: false,

            callbacks: {

                label: function(tooltipItem, data) {
                    var label = data.datasets[tooltipItem.datasetIndex].label || '';
                    if (label) {
                        label += ': ';
                    }
                  return 'Skills';
                }
            }
        },


    }
  };
  render() {
    return (
      <div className='d-none d-lg-block'>

      <Bar height='140px' data={this.state.chartData} options={this.state.chartOptions}  />
      </div>

    );
  }
}

export default VerticalChart;