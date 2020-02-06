import React from 'react';
import cloneDeep from 'lodash/cloneDeep';
import 'echarts/lib/chart/gauge';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import EC from '../../../../../components/Charts/ECharts/EC';

export default class Gauge extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getOption = () => ({
    backgroundColor: '#1b1b1b',
    tooltip: {
      formatter: '{a} <br/>{c} {b}'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Speed',
        type: 'gauge',
        min: 0,
        max: 220,
        splitNumber: 11,
        radius: '70%',
        axisLine: {

          lineStyle: {
            // lineStyle
            color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
            width: 3,
            shadowColor: '#fff',
            shadowBlur: 10
          }
        },
        axisLabel: {

          textStyle: {
            // lineStyle
            fontWeight: 'bolder',
            color: '#fff',
            shadowColor: '#fff',
            shadowBlur: 10
          }
        },
        axisTick: {
          length: 15,
          lineStyle: {
            color: 'auto',
            shadowColor: '#fff',
            shadowBlur: 10
          }
        },
        splitLine: {
          length: 25,
          lineStyle: {
            width: 3,
            color: '#fff',
            shadowColor: '#fff',
            shadowBlur: 10
          }
        },
        pointer: {
          shadowColor: '#fff',
          shadowBlur: 5
        },
        title: {
          textStyle: {
            fontWeight: 'bolder',
            fontSize: 20,
            fontStyle: 'italic',
            color: '#fff',
            shadowColor: '#fff',
            shadowBlur: 10
          }
        },
        detail: {
          backgroundColor: 'rgba(30,144,255,0.8)',
          borderWidth: 1,
          borderColor: '#fff',
          shadowColor: '#fff',
          shadowBlur: 5,
          offsetCenter: [0, '50%'],
          textStyle: {
            fontWeight: 'bolder',
            color: '#fff'
          }
        },
        data: [{ value: 40, name: 'km/h' }]
      },
      {
        name: 'Rotating speed',
        type: 'gauge',
        center: ['25%', '55%'],
        radius: '50%',
        min: 0,
        max: 7,
        endAngle: 45,
        splitNumber: 7,
        axisLine: {
          lineStyle: {
            color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
            width: 2,
            shadowColor: '#fff',
            shadowBlur: 10
          }
        },
        axisLabel: {
          textStyle: {
            fontWeight: 'bolder',
            color: '#fff',
            shadowColor: '#fff',
            shadowBlur: 10
          }
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: 'auto',
            shadowColor: '#fff',
            shadowBlur: 10
          }
        },
        splitLine: {
          length: 20,
          lineStyle: {
            width: 3,
            color: '#fff',
            shadowColor: '#fff',
            shadowBlur: 10
          }
        },
        pointer: {
          width: 5,
          shadowColor: '#fff',
          shadowBlur: 5
        },
        title: {
          offsetCenter: [0, '-30%'],
          textStyle: {
            fontWeight: 'bolder',
            fontStyle: 'italic',
            color: '#fff',
            shadowColor: '#fff',
            shadowBlur: 10
          }
        },
        detail: {
          // backgroundColor: 'rgba(30,144,255,0.8)',
          // borderWidth: 1,
          borderColor: '#fff',
          shadowColor: '#fff',
          shadowBlur: 5,
          width: 80,
          height: 30,
          offsetCenter: [25, '20%'],
          textStyle: {
            fontWeight: 'bolder',
            color: '#fff'
          }
        },
        data: [{ value: 1.5, name: 'x1000 r/min' }]
      },
      {
        name: 'Fuel meter',
        type: 'gauge',
        center: ['75%', '50%'],
        radius: '50%',
        min: 0,
        max: 2,
        startAngle: 135,
        endAngle: 45,
        splitNumber: 2,
        axisLine: {
          lineStyle: {
            color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
            width: 2,
            shadowColor: '#fff',
            shadowBlur: 10
          }
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: 'auto',
            shadowColor: '#fff',
            shadowBlur: 10
          }
        },
        axisLabel: {
          textStyle: {
            fontWeight: 'bolder',
            color: '#fff',
            shadowColor: '#fff',
            shadowBlur: 10
          },
          formatter(v) {
            switch (`${v  }`) {
              case '0':
                return 'E';
              case '1':
                return 'Gas';
              case '2':
                return 'F';
              default:
                return null;
            }
          }
        },
        splitLine: {
          length: 15,
          lineStyle: {
            width: 3,
            color: '#fff',
            shadowColor: '#fff',
            shadowBlur: 10
          }
        },
        pointer: {
          width: 2,
          shadowColor: '#fff',
          shadowBlur: 5
        },
        title: {
          show: false
        },
        detail: {
          show: false
        },
        data: [{ value: 0.5, name: 'gas' }]
      },
      {
        name: 'Water meter',
        type: 'gauge',
        center: ['75%', '50%'],
        radius: '50%',
        min: 0,
        max: 2,
        startAngle: 315,
        endAngle: 225,
        splitNumber: 2,
        axisLine: {
          lineStyle: {
            color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
            width: 2,
            shadowColor: '#fff',
            shadowBlur: 10
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            fontWeight: 'bolder',
            color: '#fff',
            shadowColor: '#fff',
            shadowBlur: 10
          },
          formatter(v) {
            switch (`${v  }`) {
              case '0':
                return 'H';
              case '1':
                return 'Water';
              case '2':
                return 'C';
              default:
                return null;
            }
          }
        },
        splitLine: {
          length: 15,
          lineStyle: {
            width: 3,
            color: '#fff',
            shadowColor: '#fff',
            shadowBlur: 10
          }
        },
        pointer: {
          width: 2,
          shadowColor: '#fff',
          shadowBlur: 5
        },
        title: {
          show: false
        },
        detail: {
          show: false
        },
        data: [{ value: 0.5, name: 'gas' }]
      }
    ]
  });

  timeTicket = null;

  getInitialState = () => ({ option: this.getOption() });

  componentDidMount() {
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }
    this.timeTicket = setInterval(() => {
      const { option } = this.state;
      const temp = cloneDeep(option);
      temp.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
      temp.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
      temp.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
      temp.series[3].data[0].value = (Math.random() * 2).toFixed(2) - 0;
      this.setState({ option: temp });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }
  }

  render() {
    return (
      <EC option={this.state.option} />
    );
  }
}
