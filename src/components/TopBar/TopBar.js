import React, { Component } from 'react';
import { Breadcrumb, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import intl from "react-intl-universal";
import { Link } from 'dva/router';
import cx from 'classnames';
import Icon from '../Icon';
import CSSAnimate from '../CSSAnimate';
import Mask from '../Mask';
import './style/index.less';
import messages from './messages';
import messagesNavBar from '../NavBar/messages';
import messagesEditor from '../../routes/UI/Editor/messages';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: this.getRouteLevel(props.location.pathname) || []
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const currentRoute = this.getRouteLevel(nextProps.location.pathname);

    this.setState({
      currentRoute
    });
  }

  getRouteLevel = pathName => {
    const orderPaths = [];
    pathName.split('/').reduce((prev, next) => {
      const path = [prev, next].join('/');
      orderPaths.push(path);
      return path;
    });

    return orderPaths
      .map(item => window.dva_router_pathMap[item])
      .filter(item => !!item);
  };

  render() {
    const {
      expand,
      collapsedRightSide,
      toggleRightSide,
      onCollapse,
      rightSideBar
    } = this.props;
    const { currentRoute } = this.state;
    const classnames = cx('topbar', {
      'topbar-expand': expand
    });

    return (
      <div className={classnames}>
        <div className="topbar-dropmenu">
          <Row gutter={22}>
            <Col xs={8} md={4}>
              <CSSAnimate
                className="animated-short"
                type={expand ? 'fadeInDown' : 'fadeOutUp'}
              >
                <a className="metro-tile">
                  <Icon type="message" />
                  <span className="metro-title">{intl.formatMessage(messagesNavBar.information)}</span>
                </a>
              </CSSAnimate>
            </Col>
            <Col xs={8} md={4}>
              <CSSAnimate
                className="animated-short"
                type={expand ? 'fadeInDown' : 'fadeOutUp'}
              >
                <a className="metro-tile">
                  <Icon type="user" />
                  <span className="metro-title">{intl.formatMessage(messagesNavBar.user)}</span>
                </a>
              </CSSAnimate>
            </Col>
            <Col xs={8} md={4}>
              <CSSAnimate
                className="animated-short"
                type={expand ? 'fadeInDown' : 'fadeOutUp'}
              >
                <a className="metro-tile">
                  <Icon type="headphones" />
                  <span className="metro-title">{intl.formatMessage(messages.support)}</span>
                </a>
              </CSSAnimate>
            </Col>
            <Col xs={8} md={4}>
              <CSSAnimate
                className="animated-short"
                type={expand ? 'fadeInDown' : 'fadeOutUp'}
              >
                <a className="metro-tile">
                  <Icon type="equalizer" />
                  <span className="metro-title">{intl.formatMessage(messagesEditor.settings)}</span>
                </a>
              </CSSAnimate>
            </Col>
            <Col xs={8} md={4}>
              <CSSAnimate
                className="animated-short"
                type={expand ? 'fadeInDown' : 'fadeOutUp'}
              >
                <a className="metro-tile">
                  <Icon type="play" />
                  <span className="metro-title">{intl.formatMessage(messages.Video)}</span>
                </a>
              </CSSAnimate>
            </Col>
            <Col xs={8} md={4}>
              <CSSAnimate
                className="animated-short"
                type={expand ? 'fadeInDown' : 'fadeOutUp'}
              >
                <a className="metro-tile">
                  <Icon type="image" />
                  <span className="metro-title">{intl.formatMessage(messages.Image)}</span>
                </a>
              </CSSAnimate>
            </Col>
          </Row>
        </div>
        <header className="topbar-content">
          {currentRoute.length ? (
            <div style={{float: 'left'}}>
              <span className="first">{currentRoute[currentRoute.length - 1].title}</span>
              <Breadcrumb>
                <Breadcrumb.Item className="icon">
                  <Icon type="home" />
                </Breadcrumb.Item>
                {/*<Breadcrumb.Item>*/}
                {/*  <Link to="/">{intl.formatMessage(messages.HomePage)}</Link>*/}
                {/*</Breadcrumb.Item>*/}
                {currentRoute.map((item, index) => (
                  <Breadcrumb.Item key={index}>
                    {index === currentRoute.length - 1 ? (
                      item.title
                    ) : (
                      <Link to={item.path}>{item.title}</Link>
                    )}
                  </Breadcrumb.Item>
                ))}
              </Breadcrumb>
            </div>
          ) : null}
          { !!rightSideBar && (
            <a
              role="presentation"
              className={cx('topbar-right', { collapse: collapsedRightSide })}
              onClick={toggleRightSide}
            >
              <Icon type="into" />
            </a>
          )}
        </header>
        <Mask
          visible={expand}
          onClose={onCollapse}
          getContainer={node => node.parentNode}
        />
      </div>
    );
  }
}

TopBar.propTypes = {
  location: PropTypes.object,
  expand: PropTypes.bool,
  collapsedRightSide: PropTypes.bool,
  toggleRightSide: PropTypes.func,
  onCollapse: PropTypes.func,
  rightSideBar: PropTypes.bool
};

export default TopBar;
