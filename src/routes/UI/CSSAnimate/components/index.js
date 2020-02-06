import React from 'react';
import { connect } from 'dva';
import { Form, Layout, Tabs, Tag } from 'antd';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import BaseComponent from '../../../../components/BaseComponent';
import CSSAnimate from '../../../../components/CSSAnimate';
import Icon from '../../../../components/Icon';
import './index.less';
import messages from '../messages';
const { Content, Sider } = Layout;
const {TabPane} = Tabs;

@connect()
class Animate extends BaseComponent {
  state = {
    animateName: 'fadeInRight',
    tagColor: 'blue',
    tagVisited: '#2db7f5',
    intl: PropTypes.object,
  };

  animateMe = e => {
    this.setState({
      animateName: e.target.innerText,
    });
  };

  render() {
    const sidebarStyle = {
      borderRight: '1px solid #ddd',
      background: '#f5f5f5',
    };
    return (
      <Layout className="full-layout page css-animate-page">
        <Sider
          width={350}
          className="css-animate-page-sider"
          style={sidebarStyle}
        >
          <div className="header">
            <h3>Animations.CSS</h3>
            <ul className="icon-list">
              <li>
                <Icon type="exclamation-circle" antd />
                <b>{intl.formatMessage(messages.author)}：</b> Daniel Eden.
              </li>
              <li>
                <p>
                  <Icon type="exclamation-circle" antd />
                  <b>{intl.formatMessage(messages.website)}：</b>
                  <a href="http://daneden.github.io/animate.css/">
                    www.github.com/animate
                  </a>
                </p>
              </li>
            </ul>
            <hr />
          </div>
          <Tabs onChange={this.onChange} type="card">
            <TabPane tab={intl.formatMessage(messages.arrival)} key="1">
              <div className="pane">
                <h6>{intl.formatMessage(messages.rotatingEntrances)}:</h6>
                <div className="content">
                  <Tag onClick={this.animateMe} color="blue">rotateIn</Tag>
                  <Tag onClick={this.animateMe} color="blue">rotateInDownLeft</Tag>
                  <Tag onClick={this.animateMe} color="blue">rotateInDownRight</Tag>
                  <Tag onClick={this.animateMe} color="blue">rotateInUpLeft</Tag>
                  <Tag onClick={this.animateMe} color="blue">rotateInUpRight</Tag>
                </div>
                <h6>{intl.formatMessage(messages.fadingEntrances)}:</h6>
                <div className="content">
                  <Tag onClick={this.animateMe} color="magenta">fadeIn</Tag>
                  <Tag onClick={this.animateMe} color="magenta">fadeInUp</Tag>
                  <Tag onClick={this.animateMe} color="magenta">fadeInDown</Tag>
                  <Tag onClick={this.animateMe} color="magenta">fadeInLeft</Tag>
                  <Tag onClick={this.animateMe} color="magenta">fadeInRight</Tag>
                  <Tag onClick={this.animateMe} color="magenta">fadeInUpBig</Tag>
                  <Tag onClick={this.animateMe} color="magenta">fadeInDownBig</Tag>
                  <Tag onClick={this.animateMe} color="magenta">fadeInLeftBig</Tag>
                  <Tag onClick={this.animateMe} color="magenta">fadeInRightBig</Tag>
                </div>
                <h6>{intl.formatMessage(messages.bouncingEntrances)}:</h6>
                <div className="content">
                  <Tag onClick={this.animateMe} color="red">bounceIn</Tag>
                  <Tag onClick={this.animateMe} color="red">bounceInDown</Tag>
                  <Tag onClick={this.animateMe} color="red">bounceInUp</Tag>
                  <Tag onClick={this.animateMe} color="red">bounceInRight</Tag>
                  <Tag onClick={this.animateMe} color="red">bounceInLeft</Tag>
                </div>
              </div>
            </TabPane>
            <TabPane tab={intl.formatMessage(messages.exit)} key="2">
              <div className="pane">
                <h6>{intl.formatMessage(messages.rotatingExits)}:</h6>
                <div className="content">
                  <Tag onClick={this.animateMe} color="blue">rotateOut</Tag>
                  <Tag onClick={this.animateMe} color="blue">rotateOutDownLeft</Tag>
                  <Tag onClick={this.animateMe} color="blue">rotateOutDownRight</Tag>
                  <Tag onClick={this.animateMe} color="blue">rotateOutUpLeft</Tag>
                  <Tag onClick={this.animateMe} color="blue">rotateOutUpRight</Tag>
                </div>
                <h6>{intl.formatMessage(messages.fadingExits)}:</h6>
                <div className="content">
                  <Tag onClick={this.animateMe} color="magenta">fadeOut</Tag>
                  <Tag onClick={this.animateMe} color="magenta">fadeOutUp</Tag>
                  <Tag onClick={this.animateMe} color="magenta">fadeOutDown</Tag>
                  <Tag onClick={this.animateMe} color="magenta">fadeOutLeft</Tag>
                  <Tag onClick={this.animateMe} color="magenta">fadeOutRight</Tag>
                  <Tag onClick={this.animateMe} color="magenta">fadeOutUpBig</Tag>
                  <Tag onClick={this.animateMe} color="magenta">fadeOutDownBig</Tag>
                  <Tag onClick={this.animateMe} color="magenta">fadeOutLeftBig</Tag>
                  <Tag onClick={this.animateMe} color="magenta">fadeOutRightBig</Tag>
                </div>
                <h6>{intl.formatMessage(messages.bouncingExits)}:</h6>
                <div className="content">
                  <Tag onClick={this.animateMe} color="red">bounceOut</Tag>
                  <Tag onClick={this.animateMe} color="red">bounceOutDown</Tag>
                  <Tag onClick={this.animateMe} color="red">bounceOutUp</Tag>
                  <Tag onClick={this.animateMe} color="red">bounceOutRight</Tag>
                  <Tag onClick={this.animateMe} color="red">bounceOutLeft</Tag>
                </div>
              </div>
            </TabPane>
            <TabPane tab={intl.formatMessage(messages.effect)} key="3">
              <div className="pane">
                <h6>{intl.formatMessage(messages.attentionSeekers)}:</h6>
                <div className="content">
                  <Tag onClick={this.animateMe} color="blue">bounce</Tag>
                  <Tag onClick={this.animateMe} color="blue">shake</Tag>
                  <Tag onClick={this.animateMe} color="blue">tada</Tag>
                  <Tag onClick={this.animateMe} color="blue">swing</Tag>
                  <Tag onClick={this.animateMe} color="blue">wobble</Tag>
                  <Tag onClick={this.animateMe} color="blue">pulse</Tag>
                  <Tag onClick={this.animateMe} color="blue">flash</Tag>
                </div>
                <h6>{intl.formatMessage(messages.flippers)}:</h6>
                <div className="content">
                  <Tag onClick={this.animateMe} color="magenta">flip</Tag>
                  <Tag onClick={this.animateMe} color="magenta">flipInX</Tag>
                  <Tag onClick={this.animateMe} color="magenta">flipOutX</Tag>
                  <Tag onClick={this.animateMe} color="magenta">flipInY</Tag>
                  <Tag onClick={this.animateMe} color="magenta">flipOutY</Tag>
                </div>
                <h6>{intl.formatMessage(messages.sliders)}:</h6>
                <div className="content">
                  <Tag onClick={this.animateMe} color="red">slideInDown</Tag>
                  <Tag onClick={this.animateMe} color="red">slideInLeft</Tag>
                  <Tag onClick={this.animateMe} color="red">slideInRight</Tag>
                  <Tag onClick={this.animateMe} color="red">slideOutUp</Tag>
                  <Tag onClick={this.animateMe} color="red">slideOutLeft</Tag>
                  <Tag onClick={this.animateMe} color="red">slideOutRight</Tag>
                </div>
                <h6>{intl.formatMessage(messages.specials)}:</h6>
                <div className="content">
                  <Tag onClick={this.animateMe} color="purple">lightSpeedIn</Tag>
                  <Tag onClick={this.animateMe} color="purple">lightSpeedOut</Tag>
                  <Tag onClick={this.animateMe} color="purple">hinge</Tag>
                  <Tag onClick={this.animateMe} color="purple">rollIn</Tag>
                  <Tag onClick={this.animateMe} color="purple">rollOut</Tag>
                </div>
              </div>
            </TabPane>
            <TabPane tab={intl.formatMessage(messages.usage)} key="4">
              <div className="pane">
                <p>{intl.formatMessage(messages.animationText)}</p>
                <pre>
                  <code>
                    {`<CSSAnimate
                        type="Animation name"
                        duration="duration"
                        delay="Delayed execution"
                        callback="Callback after the end"
                      >
                        Animate Me!
                      </CSSAnimate>`}
                  </code>
                </pre>
              </div>
            </TabPane>
          </Tabs>
        </Sider>
        <Content>
          <CSSAnimate
            className="animate-me"
            type={this.state.animateName}
          >
            <strong>Animate</strong> Me<strong>!</strong>
          </CSSAnimate>
        </Content>
      </Layout>
    );
  }
}
export default (Form.create()(Animate));
