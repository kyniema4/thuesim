import React from 'react';
import G2 from '../../../../../components/Charts/G2';
const { Chart, Axis, Geom, Tooltip, Legend, Coord, Label } = G2;

const data = [
  { country: 'China', cost: 96 },
  { country: 'Germany', cost: 121 },
  { country: 'United States', cost: 100 },
  { country: 'Japan', cost: 111 },
  { country: 'Korea', cost: 102 },
  { country: 'France', cost: 124 },
  { country: 'Italy', cost: 123 },
  { country: 'Netherlands', cost: 111 },
  { country: 'Belgium', cost: 123 },
  { country: 'United Kingdom', cost: 109 },
  { country: 'Canada', cost: 115 },
  { country: 'Russia', cost: 99 },
  { country: 'Mexico', cost: 91 },
  { country: 'India', cost: 87 },
  { country: 'Switzerland', cost: 125 },
  { country: 'Australia', cost: 130 },
  { country: 'Spain', cost: 109 },
  { country: 'Brazil', cost: 123 },
  { country: 'Thailand', cost: 91 },
  { country: 'Indonesia', cost: 83 },
  { country: 'Poland', cost: 101 },
  { country: 'Sweden', cost: 116 },
  { country: 'Austria', cost: 111 },
  { country: 'Czech Republic', cost: 107 }
];
const cols = {
  cost: {
    min: 0
  }
};

export default () => (
  <Chart
    data={data}
    scale={cols}
    padding={[ 40, 40, 110, 40 ]}
    height={368}
  >
    <Coord type="polar" />
    <Axis
      name="cost"
      label={null}
      tickLine={null}
      line={{
        stroke: '#E9E9E9',
        lineDash: [3, 3]
      }}
    />
    <Axis
      name="country"
      grid={{
        align: 'center'
      }}
      tickLine={null}
      label={{
        Offset: 10,
        textStyle: {
          textAlign: 'center'
        }
      }}
    />
    <Legend name="country" itemWidth={50} />
    <Tooltip />
    <Geom
      type="interval"
      position="country*cost"
      color="country"
      style={{
        lineWidth: 1,
        stroke: '#fff',
      }}
    >
      <Label
        content="cost"
        offset={-15}
        textStyle={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 11
        }}
      />
    </Geom>
  </Chart>
);
