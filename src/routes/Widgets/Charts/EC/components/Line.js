import React from 'react';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import EC from '../../../../../components/Charts/ECharts/EC';

function getOption() {
  return {
    title: {
      text: 'Stacked area map'
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data:['Email marketing','Alliance advertising','Video ad']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        data : ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'Email marketing',
        type:'line',
        stack: 'Total amount',
        areaStyle: {normal: {}},
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'Alliance advertising',
        type:'line',
        stack: 'Total amount',
        areaStyle: {normal: {}},
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'Video ad',
        type:'line',
        stack: 'Total amount',
        areaStyle: {normal: {}},
        data:[150, 232, 201, 154, 190, 330, 410]
      }
    ]
  };
}

export default () => (
  <EC option={getOption()}/>
);
