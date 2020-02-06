import React from 'react';
import { connect } from 'dva';
import { Layout, Button } from 'antd';
import intl from 'react-intl-universal';
import BaseComponent from '../../../../components/BaseComponent';
import Panel from '../../../../components/Panel';
import messages from '../messages';
import messagesAlerts from '../../../UI/Alerts/messages';

const { Content } = Layout;

@connect()
class BaseComponents extends BaseComponent {
  render() {
    return (
      <Layout className="full-layout page base-component-page">
        <Content>
          <Panel title={intl.formatMessage(messages.description)}>
            <h2>{intl.formatMessage(messages.baseComponent)}</h2>
            <p>{intl.formatMessage(messages.baseText)}</p>
            <h3>{intl.formatMessage(messages.notice)}</h3>
            <Button.Group>
              <Button onClick={() => this.notice.success('I‘m Hero')}>{intl.formatMessage(messagesAlerts.success)}</Button>
              <Button onClick={() => this.notice.error('I‘m Hero')}>{intl.formatMessage(messagesAlerts.failure)}</Button>
              <Button onClick={() => this.notice.warning('I‘m Hero')}>{intl.formatMessage(messagesAlerts.note)}</Button>
              <Button onClick={() => this.notice.info('I‘m Hero')}>{intl.formatMessage(messages.notice)}</Button>
            </Button.Group>
            <h3>{intl.formatMessage(messages.router)}</h3>
            <Button onClick={() => this.history.push('/')}>{intl.formatMessage(messages.backHomepage)}</Button>
          </Panel>
        </Content>
      </Layout>
    );
  }
}

export default BaseComponents;
