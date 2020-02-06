import React from 'react';
import { connect } from 'dva';
import { Link, Switch } from 'dva/router';
import { Layout } from 'antd';
import intl from 'react-intl-universal';

import { routerLinks } from "../../../constant";
import BaseComponent from '../../../../components/BaseComponent';
import './index.less';
import messages from '../messages';
const { Content, Header } = Layout;


@connect()
export default class extends BaseComponent {
  render() {
    const {routerData} = this.props;
    const {childRoutes} = routerData;
    return (
      <Layout className="full-layout page level-route-page">
        <Header>
          <Link className="sub-route-link" to={routerLinks['WidgetsLevelRoute']}>{intl.formatMessage(messages.firstLevelJump)}</Link>
          <Link className="sub-route-link" to={`${routerLinks['WidgetsLevelRoute']}/sub-route`}>{intl.formatMessage(messages.secondaryJump)}</Link>
        </Header>
        <Content>
          <Switch>{childRoutes}</Switch>
        </Content>
      </Layout>
    );
  }
}
