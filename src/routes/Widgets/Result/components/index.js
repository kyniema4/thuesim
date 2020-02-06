import React, { PureComponent } from 'react';
import { Layout, Button } from 'antd';
import intl from 'react-intl-universal';

import messages from '../messages';
import { Result } from '../../../../components/Pages';
const { Content } = Layout;

export default class extends PureComponent {
  render() {
    const actions = (
      <>
        <Button type="primary">{intl.formatMessage(messages.backToList)}</Button>
        <Button>{intl.formatMessage(messages.viewProject)}</Button>
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
            title="Submitted successfully"
            type="success"
            actions={actions}
            footer={footer}
            extra={extra}
            description={'Need support? We\'re here to help!'}
          >
            {intl.formatMessage(messages.resultSubmission)}
          </Result>
        </Content>
      </Layout>
    );
  }
}
