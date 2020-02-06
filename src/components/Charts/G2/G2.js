import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as BizCharts from 'bizcharts';
import resizeMe from '../../../decorator/resizeMe';
const { Chart } = BizCharts;

/**
 * Rewrite the BizCharts Chart, the main purpose is to pass in the external size
 * BizCharts has packaged g2 very well. The best way to use it is not to recreate the wheel, but to quickly use the example in the official website and display it perfectly in our framework.
 * So we didn't create new Bar, Line, and Pie components to increase the cost of using and learning :)
 */
@resizeMe({ refreshRate: 50 })
class Charts extends PureComponent {
  onGetG2Instance = chart => {
    this.chart = chart;
  };

  render() {
    const { size, children, ...otherProps } = this.props;
    const { width, height } = size;

    return (
      <Chart
        height={height}
        width={width}
        padding="auto"
        {...otherProps}
        onGetG2Instance={(chart) => {
          this.chart = chart;
        }}
      >
        {children}
      </Chart>
    );
  }
}
Charts.propTypes = {
  children: PropTypes.array,
  size: PropTypes.object,
};

BizCharts.Chart = Charts;
export default BizCharts;
