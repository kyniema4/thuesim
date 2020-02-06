import React from 'react';
import 'echarts/lib/chart/radar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import EC from '../../../../../components/Charts/ECharts/EC';

function getOption() {
  return {
    title: {
      text: 'Basic radar chart'
    },
    tooltip: {},
    legend: {
      data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: '#999',
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator: [
        { name: 'sale）', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Techology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: 'Allocated Budget'
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: 'Actual Spending'
          }
        ]
      }
    ]
  };
}

export default () => <EC option={getOption()} />;
