import React from 'react';
import DataSet from '@antv/data-set';
import G2 from '../../../../../components/Charts/G2';
const { Chart, Axis, Geom, Tooltip, Legend, Coord } = G2;

const data = [
  { State: 'WY','Less than 5 years old': 25635, '5 to 13 years old': 1890, '14 to 17 years old': 9314 },
  { State: 'DC','Less than 5 years old': 30352, '5 to 13 years old': 20439, '14 to 17 years old': 10225 },
  { State: 'VT','Less than 5 years old': 38253, '5 to 13 years old': 42538, '14 to 17 years old': 15757 },
  { State: 'ND','Less than 5 years old': 51896, '5 to 13 years old': 67358, '14 to 17 years old': 18794 },
  { State: 'AK','Less than 5 years old': 72083, '5 to 13 years old': 85640, '14 to 17 years old': 22153 }
];

const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
  type: 'fold',
  fields: ['Less than 5 years old', '5 to 13 years old', '14 to 17 years old'],
  key: 'generation',
  value: 'Population',
  retains: ['State']
});

export default () => (
  <Chart data={dv} forceFit height={368}>
    <Legend />
    <Coord transpose />
    <Axis name="State" label={{ offset: 12 }} />
    <Axis name="Population" />
    <Tooltip />
    <Geom type="intervalStack" position="State*Population" color="generation" />
  </Chart>
);
