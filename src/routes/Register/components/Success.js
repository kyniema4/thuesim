import React, { Component } from 'react';
import { Layout, Button, Form } from 'antd';
import intl from 'react-intl-universal';
import { Result } from '../../../components/Pages';
import messages from '../messages';
const { Content } = Layout;

@Form.create()
class Success extends Component {
  render() {
    const actions = (
      <>
        <Button type="primary">{intl.formatMessage(messages.viewMailbox)}</Button>
        <Button href="/">{intl.formatMessage(messages.backToHome)}</Button>
      </>
    );

    const footer = (
      <>
        <p>
          <a>Need More Help?</a>
        </p>
        <p>
          Misc question two? <a>Response Link</a>
        </p>
      </>
    );

    const extra = <div>Yoursite.com</div>;

    return (
      <Layout className="full-layout result-page">
        <Content>
          <Result
            title = {intl.formatMessage(messages.registrationSuccess)}
            type="success"
            actions={actions}
            footer={footer}
            extra={extra}
          >
            {intl.formatMessage(messages.textRegister)}
          </Result>
        </Content>
      </Layout>
    );
  }
}
export default (Form.create()(Success));
