import React, { PureComponent } from 'react';
import { Form, Layout } from 'antd';
import intl from 'react-intl-universal';
import PropTypes from 'prop-types';
import CSSAnimate from '../../../../components/CSSAnimate';
import Icon from '../../../../components/Icon';
import './index.less';
import messagesAnimation from '../../../UI/CSSAnimate/messages';
const { Content, Sider } = Layout;

class SideLayout extends PureComponent {
  render() {
    const { title, site, author, sideContent, children } = this.props;
    const sidebarStyle = {
      borderRight: '1px solid #ddd',
      background: '#f5f5f5',
    };
    return (
      <Layout className="full-layout charts-page">
        <Sider
          width={350}
          className="charts-page-sider"
          style={sidebarStyle}
        >
          <div className="header">
            <h3>{title}</h3>
            <ul className="icon-list">
              <li>
                <Icon type="exclamation-circle" antd />
                <b>{intl.formatMessage(messagesAnimation.author)}：</b>{author}
              </li>
              <li>
                <p>
                  <Icon type="exclamation-circle" antd />
                  <b>{intl.formatMessage(messagesAnimation.website)}：</b>
                  <a href={site}>
                    {site}
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className="side-list">
            {sideContent}
          </div>
        </Sider>
        <Content>
          <CSSAnimate id="animateMe" type="fadeInLeft">
            {children}
          </CSSAnimate>
        </Content>
      </Layout>
    );
  }
}

SideLayout.propTypes = {
  title: PropTypes.string,
  site: PropTypes.string,
  author: PropTypes.string,
  sideContent: PropTypes.node,
  children: PropTypes.node,
};

export default (Form.create()(SideLayout));
