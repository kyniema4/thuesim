import React from 'react';
import G2 from '../../../../../components/Charts/G2';
const { Chart, Axis, Geom, Coord, Guide, Shape } = G2;

const { Arc, Html } = Guide;

function creatData() {
  const data = [];
  let val = Math.random() * 6;
  val = val.toFixed(1);
  data.push({ value: val * 1 });
  return data;
}

Shape.registerShape('point', 'pointer', {
  drawShape(cfg, group) {
    let point = cfg.points[0];
    point = this.parsePoint(point);
    const center = this.parsePoint({
      x: 0,
      y: 0
    });
    group.addShape('line', {
      attrs: {
        x1: center.x,
        y1: center.y,
        x2: point.x,
        y2: point.y,
        stroke: cfg.color,
        lineWidth: 5,
        lineCap: 'round'
      }
    });
    return group.addShape('circle', {
      attrs: {
        x: center.x,
        y: center.y,
        r: 12,
        stroke: cfg.color,
        lineWidth: 4.5,
        fill: '#fff'
      }
    });
  }
});

const color = ['#0086FA', '#FFBF00', '#F5222D'];
const cols = {
  value: {
    min: 0,
    max: 6,
    tickInterval: 1,
    nice: false
  }
};

export default class Gauge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: creatData(),
      lineWidth: 25
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        data: creatData()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { data, lineWidth } = this.state;
    const val = data[0].value;
    return (
      <Chart
        data={data}
        scale={cols}
        height={368}
      >
        <Coord
          type="polar"
          startAngle={(-9 / 8) * Math.PI}
          endAngle={(1 / 8) * Math.PI}
          radius={0.75}
        />
        <Axis
          name="value"
          zIndex={2}
          line={null}
          label={{
            offset: -20,
            textStyle: {
              fontSize: 18,
              fill: '#CBCBCB',
              textAlign: 'center',
              textBaseline: 'middle'
            }
          }}
          tickLine={{
            length: -24,
            stroke: '#fff',
            strokeOpacity: 1
          }}
        />
        <Axis name="1" visible={false} />
        <Guide>
          <Arc
            zIndex={0}
            start={[0, 0.965]}
            end={[6, 0.965]}
            style={{
              stroke: 'rgba(0, 0, 0, 0.09)',
              lineWidth
            }}
          />
          {val >= 2 && (
            <Arc
              zIndex={1}
              start={[0, 0.965]}
              end={[val, 0.965]}
              style={{
                stroke: color[0],
                lineWidth
              }}
            />
          )}
          {val >= 4 && (
            <Arc
              zIndex={1}
              start={[2, 0.965]}
              end={[4, 0.965]}
              style={{
                stroke: color[1],
                lineWidth
              }}
            />
          )}
          {val >= 4 &&
            val < 6 && (
            <Arc
              zIndex={1}
              start={[4, 0.965]}
              end={[val, 0.965]}
              style={{
                stroke: color[2],
                lineWidth
              }}
            />
          )}
          {val >= 2 &&
            val < 4 && (
            <Arc
              zIndex={1}
              start={[2, 0.965]}
              end={[val, 0.965]}
              style={{
                stroke: color[1],
                lineWidth
              }}
            />
          )}
          {val < 2 && (
            <Arc
              zIndex={1}
              start={[0, 0.965]}
              end={[val, 0.965]}
              style={{
                stroke: color[0],
                lineWidth
              }}
            />
          )}
          <Html
            position={['50%', '90%']}
            html={() => (
              `<div style="width: 300px;text-align: center;font-size: 12px!important;"><p style="font-size: 1.75em; color: rgba(0,0,0,0.43);margin: 0;">Pass rate</p><p style="font-size: 3em;color: rgba(0,0,0,0.85);margin: 0;">${ 
                val * 10 
              }%</p></div>`
            )}
          />
        </Guide>
        <Geom
          type="point"
          position="value*1"
          shape="pointer"
          color="#1890FF"
          active={false}
          style={{ stroke: '#fff', lineWidth: 1 }}
        />
      </Chart>
    );
  }
}
