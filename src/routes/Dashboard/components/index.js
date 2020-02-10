import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import intl from 'react-intl-universal';

import BaseComponent from '../../../components/BaseComponent';
import messages from '../messages';
import './index.less';
const { Content } = Layout;

@connect(({dashboard}) => ({
    dashboard
}))
export default class extends BaseComponent {

    render() {
        return (
            <Layout className="full-layout page dashboard-page">
                <Content>Page blank</Content>
            </Layout>
        );
    }
}

