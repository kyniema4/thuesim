import React from 'react';
import { connect } from 'dva';
import {Button, Layout, Table, Typography} from 'antd';
import intl from 'react-intl-universal';

import BaseComponent from '../../../../components/BaseComponent';
import DashboardWidget from '../../../../components/DashboardWidget';
import messages from '../messages';
import './index.less';
import Panel from "../../../../components/Panel";
import messagesAdd from "../../AddBalanceNumber/messages";
const { Content } = Layout;
const { Paragraph } = Typography;

@connect()
export default class extends BaseComponent {
  render() {
    return (
      <Layout className="full-layout page autoapi-page">
        <Content>
          <DashboardWidget/>
          <Panel title="API" address="Auto Motion Tool" className="panel-history-banking">
            <div className="div-tool-history">
              <div>
                <Button className="copy-btn btn">Copy</Button>
                <Button className="csv-btn btn">CSV</Button>
                <Button className="print-btn btn">Print</Button>
              </div>

            </div>

            <Paragraph
                className="showing-text">{intl.formatMessage(messagesAdd.showing)} 0 {intl.formatMessage(messagesAdd.to)} 0 {intl.formatMessage(messagesAdd.of)} 0 {intl.formatMessage(messagesAdd.entries)}</Paragraph>
          </Panel>
        </Content>
      </Layout>
    );
  }
}
