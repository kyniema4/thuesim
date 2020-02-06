import React from 'react';
import 'echarts/lib/chart/map';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import EC from '../../../../../components/Charts/ECharts/EC';

require('echarts/map/js/china.js');

export default class Airport extends React.PureComponent {
  getOption = () => {
    const geoCoordMap = {
      'Shanghai': [121.4648, 31.2891],
      'Dongguan': [113.8953, 22.901],
      'Dongying': [118.7073, 37.5513],
      'Zhongshan': [113.4229, 22.478],
      'Linyi': [111.4783, 36.1615],
      'Linyi2': [118.3118, 35.2936],
      'Dandong': [124.541, 40.4242],
      'Lishui': [119.5642, 28.1854],
      'Urumqi': [87.9236, 43.5883],
      'Foshan': [112.8955, 23.1097],
      'Baoding': [115.0488, 39.0948],
      'Lanzhou': [103.5901, 36.3043],
      'Baotou': [110.3467, 41.4899],
      'Beijing': [116.4551, 40.2539],
      'North Sea': [109.314, 21.6211],
      'Nanjing': [118.8062, 31.9208],
      'Nanning': [108.479, 23.1152],
      'Nanchang': [116.0046, 28.6633],
      'Nantong': [121.1023, 32.1625],
      'Xiamen': [118.1689, 24.6478],
      'Taizhou': [121.1353, 28.6688],
      'Hefei': [117.29, 32.0581],
      'Hohhot': [111.4124, 40.4901],
      'Xianyang': [108.4131, 34.8706],
      'Harbin': [127.9688, 45.368],
      'Tangshan': [118.4766, 39.6826],
      'Jiaxing': [120.9155, 30.6354],
      'Datong': [113.7854, 39.8035],
      'Dalian': [122.2229, 39.4409],
      'Tianjin': [117.4219, 39.4189],
      'Taiyuan': [112.3352, 37.9413],
      'Weihai': [121.9482, 37.1393],
      'Ningbo': [121.5967, 29.6466],
      'Baoji': [107.1826, 34.3433],
      'Suqian': [118.5535, 33.7775],
      'Changzhou': [119.4543, 31.5582],
      'Guangzhou': [113.5107, 23.2196],
      'Langfang': [116.521, 39.0509],
      'Yanan': [109.1052, 36.4252],
      'Zhangjiakou': [115.1477, 40.8527],
      'Xuzhou': [117.5208, 34.3268],
      'Texas': [116.6858, 37.2107],
      'Huizhou': [114.6204, 23.1647],
      'Chengdu': [103.9526, 30.7617],
      'Yangzhou': [119.4653, 32.8162],
      'Chengde': [117.5757, 41.4075],
      'Lhasa': [91.1865, 30.1465],
      'Wuxi': [120.3442, 31.5527],
      'Sunshine': [119.2786, 35.5023],
      'Kunming': [102.9199, 25.4663],
      'Hangzhou': [119.5313, 29.8773],
      'Zaozhuang': [117.323, 34.8926],
      'Liuzhou': [109.3799, 24.9774],
      'Zhuzhou': [113.5327, 27.0319],
      'Wuhan': [114.3896, 30.6628],
      'Shantou': [117.1692, 23.3405],
      'Jiangmen': [112.6318, 22.1484],
      'Shenyang': [123.1238, 42.1216],
      'Zhangzhou': [116.8286, 38.2104],
      'Heyuan': [114.917, 23.9722],
      'Quanzhou': [118.3228, 25.1147],
      'Taian': [117.0264, 36.0516],
      'Taizhou2': [120.0586, 32.5525],
      'Jinan': [117.1582, 36.8701],
      'Jining': [116.8286, 35.3375],
      'Haikou': [110.3893, 19.8516],
      'Zibo': [118.0371, 36.6064],
      'Huaian': [118.927, 33.4039],
      'Shenzhen': [114.5435, 22.5439],
      'Qingyuan': [112.9175, 24.3292],
      'Wenzhou': [120.498, 27.8119],
      'Weinan': [109.7864, 35.0299],
      'Huzhou': [119.8608, 30.7782],
      'Xiangtan': [112.5439, 27.7075],
      'Binzhou': [117.8174, 37.4963],
      'Weifang': [119.0918, 36.524],
      'Yantai': [120.7397, 37.5128],
      'Yuxi': [101.9312, 23.8898],
      'Zhuhai': [113.7305, 22.1155],
      'Yancheng': [120.2234, 33.5577],
      'Panjin': [121.9482, 41.0449],
      'Shijiazhuang': [114.4995, 38.1006],
      'Fuzhou': [119.4543, 25.9222],
      'Qinhuangdao': [119.2126, 40.0232],
      'Shaoxing': [120.564, 29.7565],
      'Liaocheng': [115.9167, 36.4032],
      'Zhaoqing': [112.1265, 23.5822],
      'Zhoushan': [122.2559, 30.2234],
      'Suzhou': [120.6519, 31.3989],
      'Laiwu': [117.6526, 36.2714],
      'Heze': [115.6201, 35.2057],
      'Yingkou': [122.4316, 40.4297],
      'Huludao': [120.1575, 40.578],
      'Hengshui': [115.8838, 37.7161],
      'Zhangzhou2': [118.6853, 28.8666],
      'Xining': [101.4038, 36.8207],
      'Xian': [109.1162, 34.2004],
      'Guiyang': [106.6992, 26.7682],
      'Lianyungang': [119.1248, 34.552],
      'Xingtai': [114.8071, 37.2821],
      'Handan': [114.4775, 36.535],
      'Zhengzhou': [113.4668, 34.6234],
      'Ordos': [108.9734, 39.2487],
      'Chongqing': [107.7539, 30.1904],
      'Jinhua': [120.0037, 29.1028],
      'Tongchuan': [109.0393, 35.1947],
      'Yinchuan': [106.3586, 38.1775],
      'Zhenjiang': [119.4763, 31.9702],
      'Changchun': [125.8154, 44.2584],
      'Changsha': [113.0823, 28.2568],
      'Changzhi': [112.8625, 36.4746],
      'Yangquan': [113.4778, 38.0951],
      'Qingdao': [120.4651, 36.3373],
      'Shaoguan': [113.7964, 24.7028]
    };

    const BJData = [
      [{ name: 'Beijing' }, { name: 'Shanghai', value: 95 }],
      [{ name: 'Beijing' }, { name: 'Guangzhou', value: 90 }],
      [{ name: 'Beijing' }, { name: 'Dalian', value: 80 }],
      [{ name: 'Beijing' }, { name: 'Nanning', value: 70 }],
      [{ name: 'Beijing' }, { name: 'Nanchang', value: 60 }],
      [{ name: 'Beijing' }, { name: 'Lhasa', value: 50 }],
      [{ name: 'Beijing' }, { name: 'Changchun', value: 40 }],
      [{ name: 'Beijing' }, { name: 'Baotou', value: 30 }],
      [{ name: 'Beijing' }, { name: 'Chongqing', value: 20 }],
      [{ name: 'Beijing' }, { name: 'Changzhou', value: 10 }]
    ];

    const SHData = [
      [{ name: 'Shanghai' }, { name: 'Baotou', value: 95 }],
      [{ name: 'Shanghai' }, { name: 'Kunming', value: 90 }],
      [{ name: 'Shanghai' }, { name: 'Guangzhou', value: 80 }],
      [{ name: 'Shanghai' }, { name: 'Zhengzhou', value: 70 }],
      [{ name: 'Shanghai' }, { name: 'Changchun', value: 60 }],
      [{ name: 'Shanghai' }, { name: 'Chongqing', value: 50 }],
      [{ name: 'Shanghai' }, { name: 'Changsha', value: 40 }],
      [{ name: 'Shanghai' }, { name: 'Beijing', value: 30 }],
      [{ name: 'Shanghai' }, { name: 'Dandong', value: 20 }],
      [{ name: 'Shanghai' }, { name: 'Dalian', value: 10 }]
    ];

    const GZData = [
      [{ name: 'Guangzhou' }, { name: 'Fuzhou', value: 95 }],
      [{ name: 'Guangzhou' }, { name: 'Taiyuan', value: 90 }],
      [{ name: 'Guangzhou' }, { name: 'Changchun', value: 80 }],
      [{ name: 'Guangzhou' }, { name: 'Chongqing', value: 70 }],
      [{ name: 'Guangzhou' }, { name: 'Xian', value: 60 }],
      [{ name: 'Guangzhou' }, { name: 'Chengdu', value: 50 }],
      [{ name: 'Guangzhou' }, { name: 'Changzhou', value: 40 }],
      [{ name: 'Guangzhou' }, { name: 'Beijing', value: 30 }],
      [{ name: 'Guangzhou' }, { name: 'North Sea', value: 20 }],
      [{ name: 'Guangzhou' }, { name: 'Haikou', value: 10 }]
    ];

    const planePath =
      'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    const convertData = (data) => {
      const res = [];
      for (let i = 0; i < data.length; i += 1) {
        const dataItem = data[i];
        const fromCoord = geoCoordMap[dataItem[0].name];
        const toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
          res.push({
            fromName: dataItem[0].name,
            toName: dataItem[1].name,
            coords: [fromCoord, toCoord]
          });
        }
      }
      return res;
    };

    const color = ['#a6c84c', '#ffa022', '#46bee9'];
    const series = [];
    [['Beijing', BJData], ['Shanghai', SHData], ['Guangzhou', GZData]].forEach((
      item,
      i
    ) => {
      series.push(
        {
          name: `${item[0]  } Top10`,
          type: 'lines',
          zlevel: 1,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 0,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: `${item[0]  } Top10`,
          type: 'lines',
          zlevel: 2,
          symbol: ['none', 'arrow'],
          symbolSize: 10,
          effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 1,
              opacity: 0.6,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: `${item[0]  } Top10`,
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            brushType: 'stroke'
          },
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{b}'
            }
          },
          symbolSize(val) {
            return val[2] / 8;
          },
          itemStyle: {
            normal: {
              color: color[i]
            }
          },
          data: item[1].map((dataItem) => ({
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          }))
        }
      );
    });

    return {
      backgroundColor: '#404a59',
      title: {
        text: 'Simulated migration',
        subtext: 'Data is purely fictitious',
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['Beijing Top10', 'Shanghai Top10', 'Guangzhou Top10'],
        textStyle: {
          color: '#fff'
        },
        selectedMode: 'single'
      },
      geo: {
        map: 'china',
        label: {
          emphasis: {
            show: false
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#323c48',
            borderColor: '#404a59'
          },
          emphasis: {
            areaColor: '#2a333d'
          }
        }
      },
      series
    };
  };

  render() {
    return <EC option={this.getOption()} />;
  }
}
