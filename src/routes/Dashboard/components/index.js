import React from 'react';
import {connect} from 'dva';
import {Layout, Col, Row, Form, Typography, List, message, Avatar, Spin} from 'antd';
import DataSet from '@antv/data-set';
import intl from 'react-intl-universal';
import PropTypes from 'prop-types';
import messages from '../messages';

import BaseComponent from '../../../components/BaseComponent';
import DashboardWidget from '../../../components/DashboardWidget';
import Panel from '../../../components/Panel';
import './index.less';

const {Content} = Layout;
const {Title, Text, Paragraph} = Typography;

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

@connect(({dashboard}) => ({
    dashboard
}))
class Dashboard extends BaseComponent {
    state = {
        data: [],
        loading: false,
        hasMore: true,
        intl: PropTypes.object,
    };

    render() {
        const {dashboard} = this.props;

        return (
            <Layout className="full-layout page dashboard-page">
                <Content>
                   <DashboardWidget/>
                   <Panel title={intl.formatMessage(messages.notification)}>
                       <List
                           itemLayout="horizontal"
                           dataSource={data}
                           renderItem={item => (
                               <List.Item>
                                   <List.Item.Meta
                                       avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                       title={<a href="https://ant.design">{item.title}</a>}
                                       description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                   />
                                   <div>Content</div>
                               </List.Item>
                           )}
                           />
                   </Panel>
                </Content>
            </Layout>
        );
    }
}

export default (Form.create()(Dashboard));
