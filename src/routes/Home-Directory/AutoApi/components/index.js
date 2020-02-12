import React from 'react';
import {connect} from 'dva';
import {Button, Layout, Tabs, Typography, Timeline} from 'antd';
import intl from 'react-intl-universal';

import BaseComponent from '../../../../components/BaseComponent';
import DashboardWidget from '../../../../components/DashboardWidget';
import messages from '../messages';
import './index.less';
import Panel from "../../../../components/Panel";
import messagesAdd from "../../AddBalanceNumber/messages";

const {Content} = Layout;
const {Paragraph, Text} = Typography;
const {TabPane} = Tabs;

@connect()
export default class extends BaseComponent {
    render() {
        return (
            <Layout className="full-layout page autoapi-page">
                <Content>
                    <DashboardWidget/>
                    <Panel title="API" address="Auto Motion Tool" className="panel-history-banking">
                        <Timeline>
                          <Timeline.Item dot={<Text>1</Text>}>
                                <p className="timeline-title">Kiểm tra tiền còn lại</p>
                                <p className="timeline-address">http://thuecode.vn:1337/balance?token=dc6053dcf06c51ceb8939c59350c4208</p>
                                <p>"success":true,"balance":56700<span className="ok-text badge">Ok</span></p>
                                <p>"success":false,"balance":"error token"<span className="error-text badge">Error</span></p>
                            </Timeline.Item>
                            <Timeline.Item dot={<Text>2</Text>}>
                              <p className="timeline-title">Kiểm tra dịch vụ</p>
                              <p className="timeline-address">http://thuecode.vn:1337/balance?token=dc6053dcf06c51ceb8939c59350c4208</p>
                              <p>"success":true,"balance":56700<span className="ok-text badge">Ok</span></p>
                              <p>"success":false,"message":"error"<span className="error-text badge">Error</span></p>
                          </Timeline.Item>
                            <Timeline.Item dot={<Text>3</Text>}>
                              <p className="timeline-title">Sử dụng dịch vụ 8</p>
                              <p className="timeline-address">http://thuecode.vn:1337/balance?token=dc6053dcf06c51ceb8939c59350c4208</p>
                              <p>"success":true,"balance":56700<span className="ok-text badge">Ok</span></p>
                              <p>"success":true,"number":"find phone number", "sms":"","smsindex":""<span className="other-text badge">Tìm kiếm số phonenumber, Thời gian đợi 125s</span></p>
                              <p>"success":false,"message":"error"<span className="error-text badge">Error</span></p>
                            </Timeline.Item>
                            <Timeline.Item dot={<Text>4</Text>}>
                              <p className="timeline-title">Lấy kết quả</p>
                              <p className="timeline-address">http://thuecode.vn:1337/balance?token=dc6053dcf06c51ceb8939c59350c4208</p>
                              <p>"success":true,"balance":56700<span className="ok-text badge">Ok</span></p>
                              <p>"success":false,"message":"error"<span className="error-text badge">Error</span></p>
                            </Timeline.Item>
                        </Timeline>
                        <Panel title="Giải thích thông số" address="API" className="panel-explain">
                            <Tabs tabPosition={"left"}>
                                <TabPane tab="Token" key="1">
                                    <Paragraph className="tab-content-title">Token</Paragraph>
                                    <Paragraph className="tab-content-content">Token của tài khoản abc@gmail.com <Text
                                        className="hightlight-text blue">dfksfrtrty45gdfg4fd4hf</Text></Paragraph>
                                </TabPane>
                                <TabPane tab="Thông số" key="2">
                                    <Paragraph className="tab-content-title">Thông số</Paragraph>
                                </TabPane>
                                <TabPane tab="Cách sử dụng" key="3">
                                    <Paragraph className="tab-content-title">Cách sử dụng</Paragraph>
                                    {/*<Paragraph className="tab-content-content">1.Kiểm tra tiền còn lại: Cần kiểm tra tài*/}
                                    {/*    khoản còn đủ sử dụng ko nhờ hàm check </Paragraph>*/}
                                    {/*<Paragraph className="tab-content-content">2.Kiểm Tra Dịch Vụ: Get danh sách service*/}
                                    {/*    để lấy danh sách dịch vụ</Paragraph>*/}
                                    {/*<Paragraph className="tab-content-content">3.Sử dụng dịch vụ: Truyền thông số ID*/}
                                    {/*    dịch vụ sử dụng. Ví dụ Gmail: ID = 10</Paragraph>*/}
                                    {/*<Paragraph className="tab-content-content">4.Lấy kết quả: Các kết quả trả về của hàm*/}
                                    {/*    này sẽ là: Tìm kiếm số PhoneNumber, Trả về số phone, hãy tiến hành đăng kí với*/}
                                    {/*    số điện thoải trả về, nhận code trả về. Biến status: sẽ thông báo kết quả*/}
                                    {/*    return.</Paragraph>*/}
                                </TabPane>
                                <TabPane tab="Thắc mắc" key="4">
                                    <Paragraph className="tab-content-title">Thắc mắc</Paragraph>
                                    <Paragraph className="tab-content-content">Mọi thắc mắc xin liên hệ: <a href="#"
                                                                                                            className="hightlight-text link">SimCode!</a></Paragraph>
                                </TabPane>
                            </Tabs>
                        </Panel>
                    </Panel>
                </Content>
            </Layout>
        );
    }
}
