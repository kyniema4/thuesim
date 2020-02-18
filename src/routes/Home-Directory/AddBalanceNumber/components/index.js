import React from 'react';
import {connect} from 'dva';
import {Button, Form, Layout, Input, Typography, Row, Col, Table} from 'antd';
import intl from 'react-intl-universal';

import BaseComponent from '../../../../components/BaseComponent';
import DashboardWidget from '../../../../components/DashboardWidget';
import Panel from '../../../../components/Panel';

const {Title, Text, Paragraph} = Typography;
const {TextArea, Search} = Input;
import messages from '../messages';
import HomeMessage from '../../Home/messages';
import './index.less';

const {Content} = Layout;


@connect()
class AddBalanceNumber extends BaseComponent {
    render() {
        const formItemLayout = {
            labelCol: {
                md: {
                    span: 24,
                    offset: 0,
                },
                lg: {
                    span: 5,
                    offset: 2,
                },
            },
            wrapperCol: {
                md: {
                    span: 24,
                    offset: 0,
                },
                lg: {
                    span: 10,
                    offset: 0,
                },
            },
        };
        const columns = [
            {
                title: intl.formatMessage(messages.transactionID),
                dataIndex: 'id',
                key: 'id',
                width: 200,
            },
            {
                title: intl.formatMessage(messages.amountOfMoney),
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
                title: intl.formatMessage(messages.note),
                dataIndex: 'note',
                key: 'note',
            },
            {
                title: intl.formatMessage(messages.error),
                dataIndex: 'error',
                key: 'error',
            },
        ];
        const historyData = [];
        return (
            <Layout className="full-layout page addbalancenumber-page">
                <Content>
                    <DashboardWidget/>
                    <Row gutter={20}>
                        <Col md={12}>
                            <Panel title={intl.formatMessage(messages.addMoney)} className="panel-addmoney">
                                <Paragraph
                                    className="panel-subtitle">{intl.formatMessage(messages.tutorialPayment)}</Paragraph>
                                <Form {...formItemLayout}>
                                    <Form.Item label="ID*">
                                        <Input value="12346678932165" type="number"/>
                                    </Form.Item>
                                    <Form.Item label="Email*">
                                        <Input value="abc@gmail.com" type="email"/>
                                    </Form.Item>
                                    <Form.Item label={intl.formatMessage(messages.name)}>
                                        <Input placeholder={intl.formatMessage(messages.firstName)}/>
                                    </Form.Item>
                                    <Form.Item label={intl.formatMessage(messages.phoneNumber)}>
                                        <Input value="123123" type="number"/>
                                    </Form.Item>
                                    <Form.Item label={intl.formatMessage(messages.amountOfMoney)}>
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item label={intl.formatMessage(messages.note)}>
                                        <TextArea rows={3}/>
                                    </Form.Item>
                                    <Form.Item
                                        wrapperCol={{
                                            lg: {span: 24, offset: 7},
                                            md: {span: 24, offset: 0},
                                        }}
                                        className="div-btn"
                                    >
                                        <Button
                                            className="add-btn">{intl.formatMessage(messages.proceedToSubmit)}</Button>
                                    </Form.Item>
                                </Form>
                            </Panel>
                        </Col>
                        <Col md={12}>
                            <Panel title={intl.formatMessage(messages.otherForm)} className="panel-other-form">
                                <Paragraph
                                    className="panel-subtitle">{intl.formatMessage(messages.tutorialContact)}</Paragraph>
                            </Panel>
                        </Col>
                    </Row>
                    <div className="div-history-topup">
                        <Paragraph className="history-topup-text">{intl.formatMessage(messages.addBalance)}</Paragraph>

                        <div className="p20">
                            <Panel title={intl.formatMessage(messages.bankHistory)} address="User abc@gmail.com"
                                   className="panel-history-banking">
                                <div className="div-tool-history">
                                    <div>
                                        <Button className="copy-btn btn">Copy</Button>
                                        <Button className="csv-btn btn">CSV</Button>
                                        <Button className="print-btn btn">Print</Button>
                                    </div>
                                    <Search
                                        placeholder={intl.formatMessage(messages.search)}
                                        onSearch={value => console.log(value)}
                                        style={{width: 200}}
                                    />
                                </div>
                                <Table columns={columns} dataSource={historyData} size="small" bordered pagination={{ pageSize: 2 }} />

                                <Paragraph
                                    className="showing-text">{intl.formatMessage(messages.showing)} 0 {intl.formatMessage(messages.to)} 0 {intl.formatMessage(messages.of)} 0 {intl.formatMessage(messages.entries)}</Paragraph>
                            </Panel>
                        </div>
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default (Form.create()(AddBalanceNumber));
