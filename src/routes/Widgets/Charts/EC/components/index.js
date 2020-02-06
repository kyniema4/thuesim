import React from 'react';
import { connect } from 'dva';
import { Form, List } from 'antd';
import intl from 'react-intl-universal';
import PropTypes from 'prop-types';
import BaseComponent from '../../../../../components/BaseComponent';
import Icon from '../../../../../components/Icon';
import Panel from '../../../../../components/Panel';
import SideLayout from '../../components/SideLayout';
import messages from '../messages';

@connect()
class ECs extends BaseComponent {
  state = {
    intl: PropTypes.object,
    activeKey: 'Line',
    chartTypes: [
      {
        title: intl.formatMessage(messages.line),
        icon: 'line-chart',
        key: 'Line',
        components: ['./Line']
      },
      {
        title: intl.formatMessage(messages.bar),
        icon: 'bar-chart',
        key: 'Bar',
        components: ['./Bar']
      },
      {
        title: intl.formatMessage(messages.pie),
        icon: 'pie-chart',
        key: 'Pie',
        components: ['./Pie']
      },
      {
        title: intl.formatMessage(messages.scatter),
        icon: 'dot-chart',
        key: 'Scatter',
        components: ['./Scatter']
      },
      {
        title: intl.formatMessage(messages.map),
        icon: 'global', key: 'Map', components: ['./Map'] },
      {
        title: intl.formatMessage(messages.radar),
        icon: 'trademark',
        key: 'Radar',
        components: ['./Radar']
      },
      {
        title: intl.formatMessage(messages.gauge),
        icon: 'dashboard',
        key: 'Gauge',
        components: ['./Gauge']
      }
    ]
  };

  onSelect = activeKey => {
    this.setState({
      activeKey
    });
  };

  render() {
    const { chartTypes, activeKey } = this.state;
    const sideContent = (
      <List
        className="charts-type-list"
        dataSource={chartTypes}
        renderItem={item => (
          <List.Item
            actions={[<Icon type="ellipsis" antd />]}
            onClick={() => this.onSelect(item.key)}
          >
            <Icon type={item.icon} antd />
            {item.title}
          </List.Item>
        )}
      />
    );
    const active = chartTypes.filter(item => item.key === activeKey)[0];
    return (
      <SideLayout
        title={intl.formatMessage(messages.EChartsChart)}
        author={intl.formatMessage(messages.baiduECharts)}
        site="http://echarts.baidu.com"
        sideContent={sideContent}
      >
        {active.components.map((item, index) => {
          const Chart = require(`${item}`).default;
          return (
            <Panel
              key={index}
              title={
                <div>
                  <Icon type={active.icon} antd />&nbsp;
                  {active.title}
                </div>
              }
              height={400}
            >
              <Chart />
            </Panel>
          );
        })}
      </SideLayout>
    );
  }
}

export default (Form.create()(ECs));
