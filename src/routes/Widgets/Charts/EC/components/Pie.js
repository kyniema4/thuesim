import React from 'react';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import EC from '../../../../../components/Charts/ECharts/EC';

export default class Events extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cnt: 0
    };
  }

  getOption = () => ({
    title: {
      text: 'User access source for a site',
      subtext: 'Purely fictitious',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['direct interview', 'Email marketing', 'Alliance advertising', 'Video ad', 'search engine']
    },
    series: [
      {
        name: 'Access source',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: 'direct interview' },
          { value: 310, name: 'Email marketing' },
          { value: 234, name: 'Alliance advertising' },
          { value: 135, name: 'Video ad' },
          { value: 1548, name: 'search engine' }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  });

  onChartClick = () => {
    // param, echarts
    const { cnt } = this.state;
    this.setState({
      cnt: cnt + 1
    });
  };

  onChartLegendselectchanged = () => {}; // param, echart

  onChartReady = () => {}; // echarts

  render() {
    const onEvents = {
      click: this.onChartClick,
      legendselectchanged: this.onChartLegendselectchanged
    };

    return (
      <EC
        option={this.getOption()}
        onChartReady={this.onChartReady}
        onEvents={onEvents}
      />
    );
  }
}
