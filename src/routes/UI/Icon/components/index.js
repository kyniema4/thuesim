import React from 'react';
import { connect } from 'dva';
import { Form, Layout } from 'antd';
import intl from 'react-intl-universal';
import BaseComponent from '../../../../components/BaseComponent';
import Icon from '../../../../components/Icon';
import Panel from '../../../../components/Panel';
import messages from '../messages';
import './index.less';
const { Content } = Layout;

@connect()
class Icons extends BaseComponent {

  render() {
    return (
      <Layout className="full-layout page icon-page">
        <Content>
          <Panel title={intl.formatMessage(messages.iconUsage)}>
            <p>
              {intl.formatMessage(messages.iconText)}
            </p>
            <p>
              {intl.formatMessage(messages.defaultIcon)} :
              <code>{`<Icon type="icon name" />`}</code></p>
            <p>
              {intl.formatMessage(messages.antdIcon)} ：
              <code>{`<Icon type="Antd icon name" antd />`}
              </code>
            </p>
            <p>
              {intl.formatMessage(messages.otherIcon)} ：
              <code>{`<Icon type="icon name" font="iconfont" />`}</code>
              <Icon type="location" font="iconfont" />
            </p>
            <p>
              {intl.formatMessage(messages.useUnicode)} ：
              <code>{`<Icon type={"&#xe734;"} font="iconfont" />`}</code>
              <Icon type={"&#xe734;"} font="iconfont" />
            </p>
          </Panel>
          <Panel title={intl.formatMessage(messages.defaultIcon)}>
            <ul className="icon-page-list clearfix">
              {icomoonlist.map(icon => (
                <li key={icon} className="icon-item">
                  <Icon type={icon} />
                  <span className="icon-name">{icon}</span>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel title={intl.formatMessage(messages.antdIcon)}>
            <ul className="icon-page-list clearfix">
              {antdlist.map(icon => (
                <li key={icon} className="icon-item">
                  <Icon type={icon} antd />
                  <span className="icon-name">{icon}</span>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel title={intl.formatMessage(messages.otherIcon)}>
            <ul className="icon-page-list clearfix">
              <li className="icon-item">
                <Icon type="loading" font="iconfont" spin />
                <span className="icon-name">loading</span>
              </li>
              {otherlist.map(icon => (
                <li key={icon} className="icon-item">
                  <Icon type={icon} font="iconfont" />
                  <span className="icon-name">{icon}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </Content>
      </Layout>
    );
  }
}

export default (Form.create()(Icons));

const icomoonlist = [
  'lines', 'wand', 'radio-tower', 'ruby', 'screen-full', 'home', 'image', 'camera', 'play', 'equalizer',
  'headphones', 'message', 'mail', 'man', 'woman', 'user', 'ring', 'gear', 'increase', 'decrease', 'users',
  'poweroff', 'check', 'close', 'into', 'trash', 'minus', 'plus', 'refresh', 'sync', 'enlarge', 'shrink',
  'edit', 'buret', 'finder', 'download', 'upload', 'info', 'exclamation'
];

const antdlist = [
  'android', 'android-o', 'apple', 'apple-o', 'windows', 'windows-o', 'ie', 'chrome', 'github', 'aliwangwang', 'aliwangwang-o', 'dingding', 'dingding-o',
  'weibo-square', 'weibo-circle', 'taobao-circle', 'html5', 'weibo', 'twitter', 'wechat', 'youtube', 'alipay-circle', 'taobao', 'skype', 'qq', 'medium-workmark', 'gitlab', 'medium', 'linkedin', 'google-plus',
  'dropbox', 'facebook', 'codepen', 'amazon', 'google', 'codepen-circle', 'alipay', 'ant-design', 'aliyun', 'zhihu', 'slack', 'slack-square', 'behance', 'behance-square', 'dribbble', 'dribbble-square', 'instagram', 'yuque',
];

const otherlist = [
  'rmb', 'card', 'list', 'search', 'location', 'pulldown', 'mine-o', 'mine', 'password',
  'caret-right', 'caret-left', 'caret-down', 'caret-top', 'check', 'cross', 'right', 'left', 'top',
  'bottom', 'arrow-top', 'arrow-bottom', 'add', 'minus', 'info-circle-o', 'info-circle', 'warning-o',
  'warning', 'cross-circle-o', 'cross-circle', 'check-circle-o', 'check-circle', 'delete', 'back',
  'upload', 'download', 'up-circle', 'down-circle',
];
