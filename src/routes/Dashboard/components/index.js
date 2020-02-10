import React from 'react';
import { connect } from 'dva';
import { Layout, Button } from 'antd';
import intl from 'react-intl-universal';
import Panel from '../../../components/Panel';
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
                <Content>
                    <Panel title="THÔNG BÁO">
                        <p>QUẢN LÝ ĐÓNG GÓP CODE CHUYỂN LINK</p>
                    </Panel>
                </Content>
            </Layout>
        );
    }
}

