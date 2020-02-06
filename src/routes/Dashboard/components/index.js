import React from 'react';
import {connect} from 'dva';
import {Layout, Col, Row, Form, Typography, Icon} from 'antd';
import DataSet from '@antv/data-set';
import intl from 'react-intl-universal';
import PropTypes from 'prop-types';
import messages from '../messages';

import BaseComponent from '../../../components/BaseComponent';
import Panel from '../../../components/Panel';
import './index.less';

const {Content} = Layout;
const {Title, Text, Paragraph} = Typography;

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
    rankingListData.push({
        title: `Engineering road ${i} Shop`,
        total: 323234
    });
}

@connect(({dashboard}) => ({
    dashboard
}))
class Dashboard extends BaseComponent {
    state = {
        intl: PropTypes.object,
    };

    render() {
        const {dashboard} = this.props;
        const {bar1, bar2} = dashboard;
        return (
            <Layout className="full-layout page dashboard-page">
                <Content>
                    <Row gutter={20}>
                        <Col md={12} lg={6}>
                            <Panel className="panel-first" header={false} cover>
                                <Paragraph className="title">Tổng tiền</Paragraph>
                                <Title level={2} className="number-dashboard">0</Title>
                                <Paragraph className="sub-title">
                                    <Text className="percent">4%</Text>
                                    <Text>From last week</Text>
                                </Paragraph>
                            </Panel>
                        </Col>
                        <Col md={12} lg={6}>
                            <Panel className="panel-second" header={false} cover>
                              <Paragraph className="title">Đã sử dụng</Paragraph>
                              <Title level={2} className="number-dashboard">0</Title>
                              <Paragraph className="sub-title">
                                <Text className="percent"> <Icon type="caret-up" />3%</Text>
                                <Text>From last week</Text>
                              </Paragraph>
                            </Panel>
                        </Col>
                        <Col md={12} lg={6}>
                            <Panel className="panel-third" header={false} cover>
                              <Paragraph className="title">Tổng code</Paragraph>
                              <Title level={2} className="number-dashboard">0</Title>
                              <Paragraph className="sub-title">
                                <Text className="percent"><Icon type="caret-up" />34%</Text>
                                <Text>From last week</Text>
                              </Paragraph>
                            </Panel>
                        </Col>
                        <Col md={12} lg={6}>
                            <Panel className="panel-four" header={false} cover>
                              <Paragraph className="title">Tổng lỗi</Paragraph>
                              <Title level={2} className="number-dashboard">0</Title>
                              <Paragraph className="sub-title">
                                <Text className="percent"> <Icon type="caret-up" />34%</Text>
                                <Text>From last week</Text>
                              </Paragraph>
                            </Panel>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default (Form.create()(Dashboard));
