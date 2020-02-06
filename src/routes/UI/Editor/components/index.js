import React from 'react';
import { connect } from 'dva';
import { Layout, Button, message, Form } from 'antd';
import intl from 'react-intl-universal';
import PropTypes from 'prop-types';
import BaseComponent from '../../../../components/BaseComponent';
import Editor from '../../../../components/Editor';
import Panel from '../../../../components/Panel';
import messages from '../messages';
const { Content } = Layout;

@connect()
class Editors extends BaseComponent {
  state = {
    html: '',
    intl: PropTypes.object,
  };

  onChange = html => {
    this.setState({
      html
    });
  };

  render() {
    return (
      <Layout className="full-layout page">
        <Content>
          <Panel title={intl.formatMessage(messages.richText)}>
            <p>
              {intl.formatMessage(messages.richTextUse)}
              <a href="https://github.com/wangfupeng1988/wangEditor">
                &nbsp; wangEditor, &nbsp;
              </a>
              {intl.formatMessage(messages.specific)}
            </p>
            <div>
              <Button.Group>
                <Button
                  type="primary"
                  onClick={() =>
                    this.setState({ newHtml: '<div>I want to be happy today!</div>' })
                  }
                >
                  {intl.formatMessage(messages.settings)}
                </Button>
                <Button onClick={() => message.success(this.state.html)}>
                  {intl.formatMessage(messages.getValue)}
                </Button>
                <Button onClick={() => this.setState({ newHtml: '' })}>
                  {intl.formatMessage(messages.clearValue)}
                </Button>
              </Button.Group>
            </div>
            <Editor onChange={this.onChange} value={this.state.newHtml} />
            <b>HTML: </b>
            {this.state.html}
          </Panel>
        </Content>
      </Layout>
    );
  }
}

export default (Form.create()(Editors));
