import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import { Switch } from 'dva/router';
import './styles/frontend.less';
import PropTypes from 'prop-types';
const { Content } = Layout;

@connect()
class FrontendLayout extends React.PureComponent {

  render() {
    const {routerData} = this.props;
    const {childRoutes} = routerData;

    return (
      <Layout className="full-layout user-layout fixed">
        <Content>
          <Switch>{childRoutes}</Switch>
        </Content>
      </Layout>
    );
  }
}

FrontendLayout.propTypes = {
  routerData: PropTypes.object,
};

export default FrontendLayout;
