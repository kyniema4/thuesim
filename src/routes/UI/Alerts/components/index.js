import React from 'react';
import { connect } from 'dva';
import { Layout, Button, Form } from 'antd';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import BaseComponent from '../../../../components/BaseComponent';
import Panel from '../../../../components/Panel';
import messages from '../messages';
import { normal, antdNotice } from '../../../../components/Notification';
const { Content } = Layout;

@connect()
class Alerts extends BaseComponent {
  state = {
    intl: PropTypes.object,
  };

  render() {
    return (
      <Layout className="full-layout page base-component-page">
        <Content>
          <Panel title={intl.formatMessage(messages.notification)}>
            <p>{intl.formatMessage(messages.notificationText)}</p>
          </Panel>
          <Panel title={intl.formatMessage(messages.notificationNormal)}>
            <Button.Group>
              <Button onClick={() => normal.success('I‘m Hero')}>{intl.formatMessage(messages.success)}</Button>
              <Button onClick={() => normal.error('I‘m Hero')}>{intl.formatMessage(messages.failure)}</Button>
              <Button onClick={() => normal.warning('I‘m Hero')}>{intl.formatMessage(messages.note)}</Button>
              <Button onClick={() => normal.info('I‘m Hero')}>{intl.formatMessage(messages.notification)}</Button>
            </Button.Group>
          </Panel>
          <Panel title={intl.formatMessage(messages.antdNote)}>
            <Button.Group>
              <Button onClick={() => antdNotice.success('I‘m Hero')}>{intl.formatMessage(messages.success)}</Button>
              <Button onClick={() => antdNotice.error('I‘m Hero')}>{intl.formatMessage(messages.failure)}</Button>
              <Button onClick={() => antdNotice.warning('I‘m Hero')}>{intl.formatMessage(messages.note)}</Button>
              <Button onClick={() => antdNotice.info('I‘m Hero')}>{intl.formatMessage(messages.notification)}</Button>
            </Button.Group>
          </Panel>
        </Content>
      </Layout>
    );
  }
}

export default (Form.create()(Alerts));
