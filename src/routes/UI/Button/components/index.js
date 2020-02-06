import React from 'react';
import { connect } from 'dva';
import { Form, Layout } from 'antd';
import intl from 'react-intl-universal';
import BaseComponent from '../../../../components/BaseComponent';
import Button from '../../../../components/Button';
import Panel from '../../../../components/Panel';
import './index.less';
import messages from '../messages';

const { Content } = Layout;
const {Ripple} = Button;

@connect()
class Buttons extends BaseComponent {
  render() {
    return (
      <Layout className="full-layout page button-page">
        <Content>
          <Panel title={intl.formatMessage(messages.antDButton)}>
            <Button type="primary">{intl.formatMessage(messages.primary)}</Button>
            <Button tooltip={intl.formatMessage(messages.tip)}>{intl.formatMessage(messages.default)}</Button>
            <Button type="dashed">{intl.formatMessage(messages.dashed)}</Button>
            <Button type="danger">{intl.formatMessage(messages.danger)}</Button>
          </Panel>
          <Panel title={intl.formatMessage(messages.rippleButton)}>
            <div>
              <Ripple>{intl.formatMessage(messages.default)}</Ripple>
              <Ripple type="primary">{intl.formatMessage(messages.primary)}</Ripple>
              <Ripple type="danger">{intl.formatMessage(messages.danger)}</Ripple>
            </div>
            <div>
              <Ripple ghost>{intl.formatMessage(messages.default)}</Ripple>
              <Ripple ghost type="primary">{intl.formatMessage(messages.primary)}</Ripple>
              <Ripple ghost type="danger">{intl.formatMessage(messages.danger)}</Ripple>
            </div>
          </Panel>
        </Content>
      </Layout>
    );
  }
}

export default (Form.create()(Buttons));
