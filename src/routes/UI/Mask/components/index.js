import React from 'react';
import { connect } from 'dva';
import { Layout, Button, Form } from 'antd';
import intl from 'react-intl-universal';
import BaseComponent from '../../../../components/BaseComponent';
import Panel from '../../../../components/Panel';
import Mask from '../../../../components/Mask';
import avatar from '../../../../assets/images/avatar.jpg';
import messages from '../messages';
const { Content } = Layout;

@connect()
class Masks extends BaseComponent {
  state = {
    mask: { visible: false },
  };

  toggleMask = props => {
    const { mask } = this.state;
    this.setState({
      mask: {
        ...props,
        visible: !mask.visible
      }
    });
  };

  render() {
    return (
      <Layout className="full-layout page">
        <Content>
          <Panel title={intl.formatMessage(messages.maskComponent)}>
            <p>{intl.formatMessage(messages.maskEffect)}</p>
            <Button.Group>
              <Button onClick={() => this.toggleMask()}>{intl.formatMessage(messages.general)}</Button>
              <Button onClick={() => this.toggleMask({ closable: true })}>
                {intl.formatMessage(messages.withXIcon)}
              </Button>
              <Button
                onClick={() =>
                  this.toggleMask({
                    closable: true,
                    maskClosable: false
                  })
                }
              >
                {intl.formatMessage(messages.cannotExternally)}
              </Button>
              <Button onClick={() => this.toggleMask({ className: 'search-box' })}>
                {intl.formatMessage(messages.CodePenStyle)}
              </Button>
            </Button.Group>
          </Panel>
        </Content>
        <Mask
          onClose={() => this.toggleMask()}
          {...this.state.mask}
        >
          <img
            src={avatar}
            alt="logo"
            style={{
              position: 'absolute',
              margin: 'auto',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          />
        </Mask>
      </Layout>
    );
  }
}
export default (Form.create()(Masks));
