import React from 'react';
import { connect } from 'dva';
import { Layout, Button, Table, Typography, Input } from 'antd';
import intl from 'react-intl-universal';
import Panel from '../../../../components/Panel';
import BaseComponent from '../../../../components/BaseComponent';
import  DashboardWidget from '../../../../components/DashboardWidget';
import messages from '../messages';
import messagesAdd from '../../AddBalanceNumber/messages';
import './index.less';
import HomeMessage from "../../Home/messages";
const { Content } = Layout;
const { Search } = Input;
const { Column } = Table;
const { Text, Paragraph} = Typography;

@connect()

export default class extends BaseComponent {
  render() {
    const columnsBanking = [
      {
        title: intl.formatMessage(messagesAdd.transactionID),
        dataIndex: 'id',
        key: 'id',
        width: 200,
      },
      {
        title: intl.formatMessage(messagesAdd.amountOfMoney),
        dataIndex: 'money',
        key: 'money',
        width: 250,
      },
      {
        title: intl.formatMessage(HomeMessage.time),
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: intl.formatMessage(messagesAdd.note),
        dataIndex: 'note',
        key: 'note',
      },
      {
        title: intl.formatMessage(messagesAdd.error),
        dataIndex: 'error',
        key: 'error',
      },
    ];
    const columnsGetCode = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: intl.formatMessage(HomeMessage.time),
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: 'SimID',
        dataIndex: 'simID',
        key: 'simID',
      },
      {
        title: intl.formatMessage(HomeMessage.type),
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: intl.formatMessage(HomeMessage.value),
        dataIndex: 'value',
        key: 'value',
      },
      {
        title: intl.formatMessage(HomeMessage.status),
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: intl.formatMessage(HomeMessage.codeRequest),
        dataIndex: 'codeRequest',
        key: 'codeRequest',
        width: 150
      },
    ];
    const historyBakingData = [];
    const historyData = [];
    return (
      <Layout className="full-layout page history-page">
        <Content>
          <DashboardWidget/>
          <div className="div-history-topup">
            <Paragraph className="history-topup-text">{intl.formatMessage(messagesAdd.addBalance)}</Paragraph>

            <div className="p20">
              <Panel title={intl.formatMessage(messagesAdd.bankHistory)} address="User abc@gmail.com" className="panel-history-banking">
                <div className="div-tool-history">
                  <div>
                    <Button className="copy-btn btn">Copy</Button>
                    <Button className="csv-btn btn">CSV</Button>
                    <Button className="print-btn btn">Print</Button>
                  </div>
                  <Search
                      placeholder={intl.formatMessage(messagesAdd.search)}
                      onSearch={value => console.log(value)}
                      style={{width: 200}}
                  />
                </div>
                <Table columns={columnsBanking} dataSource={historyBakingData} size="small" bordered pagination={{ pageSize: 2 }} />

                <Paragraph
                    className="showing-text">{intl.formatMessage(messagesAdd.showing)} 0 {intl.formatMessage(messagesAdd.to)} 0 {intl.formatMessage(messagesAdd.of)} 0 {intl.formatMessage(messagesAdd.entries)}</Paragraph>
              </Panel>

              <Panel title={intl.formatMessage(HomeMessage.getCodeHistory)} address="User abc@gmail.com"
                     className="panel-history-banking">
                <div className="div-tool-history">
                  <div>
                    <Button className="copy-btn btn">Copy</Button>
                    <Button className="csv-btn btn">CSV</Button>
                    <Button className="print-btn btn">Print</Button>
                  </div>
                  <Search
                      placeholder={intl.formatMessage(messagesAdd.search)}
                      onSearch={value => console.log(value)}
                      style={{width: 200}}
                  />
                </div>
                <Table columns={columnsGetCode} dataSource={historyData} size="small" bordered pagination={{ pageSize: 2 }} />

                <Paragraph
                    className="showing-text">{intl.formatMessage(messagesAdd.showing)} 0 {intl.formatMessage(messagesAdd.to)} 0 {intl.formatMessage(messagesAdd.of)} 0 {intl.formatMessage(messagesAdd.entries)}</Paragraph>
              </Panel>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}
