import React from 'react';
import { connect } from 'dva';
import { Layout, Button, Table, Typography, Input } from 'antd';
import intl from 'react-intl-universal';
import Panel from '../../../../components/Panel';
import BaseComponent from '../../../../components/BaseComponent';
import messages from '../messages';
import './index.less';
const { Content } = Layout;
const { Search } = Input;
const { Column } = Table;
const { Text } = Typography;

const data = [
  {
    key: '1',
    id: '010562',
    money: 12548258,
    time: 32,
    note: 'New York No. 1 Lake Park',
    error: 'error'
  },
  {
    key: '2',
    id: '0125362',
    money: 12548258,
    time: 32,
    note: 'New York No. 1 Lake Park',
    error: 'error'
  },
  {
    key: '3',
    id: '1450562',
    money: 12548258,
    time: 32,
    note: 'New York No. 1 Lake Park',
    error: 'error'
  },
];

@connect()

export default class extends BaseComponent {
  render() {
    return (
      <Layout className="full-layout page history-page">
        <Content>
          <Panel title="API">
            <Panel title="Lịch sử Baking">
            <Button.Group>
              <Button>Copy</Button>
              <Button>CSV</Button>
              <Button>Print</Button>
            </Button.Group>
            <br/>
            <Search onSearch={value => console.log(value)} enterButton className="style-search"/>
              <Table dataSource={data} className="mt20">
                <Column title="ID giao dịch" dataIndex="id" key="id"></Column>
                <Column title="Số tiền" dataIndex="money" key="money" />
                <Column title="Thời gian" dataIndex="time" key="time"></Column>
                <Column title="Ghi chú" dataIndex="note" key="note"></Column>
                <Column title="Lỗi" dataIndex="error" key="error"></Column>
              </Table>
            </Panel>

            <Panel title="Lịch sử">
              <Text>Lịch sửa getcode</Text> <br/>
              <Button.Group className="mt20">
                <Button>Copy</Button>
                <Button>CSV</Button>
                <Button>Print</Button>
              </Button.Group>
              <br/>
              <Search onSearch={value => console.log(value)} enterButton className="style-search"/>
                <Table className="mt20">
                  <Column title="ID" dataIndex="id" key="id"></Column>
                  <Column title="Thời gian" dataIndex="money" key="money" />
                  <Column title="Sim ID" dataIndex="time" key="time"></Column>
                  <Column title="Loại" dataIndex="note" key="note"></Column>
                  <Column title="Giá trị" dataIndex="note" key="note"></Column>
                  <Column title="Trạng thái" dataIndex="note" key="note"></Column>
                  <Column title="Yêu cầu mã" dataIndex="note" key="note"></Column>
                </Table>
            </Panel>
          </Panel>
        </Content>
      </Layout>
    );
  }
}
