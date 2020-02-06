import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import intl from 'react-intl-universal';
import BaseComponent from '../../../components/BaseComponent';
import style from './index.less';
import messages from '../messages';
const { Content } = Layout;

@connect()
export default class extends BaseComponent {
  render() {
    return (
      <Layout className="full-layout page blank-page">
        <Content className={style.class}>{intl.formatMessage(messages.blankPage)}</Content>
      </Layout>
    );
  }
}
