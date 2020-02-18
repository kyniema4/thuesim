import React from 'react';
import { connect } from 'dva';
import {Layout, Row, Col, Typography, Avatar, Form, Input, Button, Icon} from 'antd';
import intl from 'react-intl-universal';

import BaseComponent from '../../../components/BaseComponent';
import messages from '../messages';
import messagesHome from '../../Home-Directory/Home/messages';
import './index.less';
const { Content } = Layout;
const { Paragraph } = Typography;

@connect()
class Profile extends BaseComponent {
  render() {
    const formItemLayout = {
      labelCol: {
        sm: {
          span: 10,
          offset: 0,
        },
        lg: {
          span: 7,
          offset: 0,
        },
      },
      wrapperCol: {
        sm: {
          span: 12,
          offset: 0,
        },
        lg: {
          span: 10,
          offset: 0,
        },
      },
    };
    return (
      <Layout className="full-layout page profile-page">
        <Content>
         <div>
           <Row className="div-center">
             <Col md={18} lg={12}  className="div-profile">
               <Row className="div-profile-top">
                 <Col span={14} className="col-welcome">
                   <Paragraph className="welcome-text">{intl.formatMessage(messages.welcomeBack)}</Paragraph>
                   <Paragraph className="text-avatar">Samatha Phan</Paragraph>
                   <div className="div-avatar">
                     <Avatar src='../images/avatar.jpg' className="img-avatar" />
                     <div className="div-upload-avt">
                       <Icon type="camera" />
                     </div>
                     {/*<div span={9} className="col-btn">*/}
                     {/*  <Button className="actived-btn">View</Button>*/}
                     {/*  <Button className="disble-btn">Setting</Button>*/}
                     {/*</div>*/}
                   </div>
                 </Col>
                 <Col span={10}  className="col-img">
                   <img src="/images/profile-img.png"/>
                 </Col>
               </Row>
               <div className="div-profile-content">
                 <Paragraph className="information">{intl.formatMessage(messages.profileInfo)}</Paragraph>
                 <Paragraph className="tutorial">{intl.formatMessage(messages.tutorialEdit)}</Paragraph>

                 <Form {...formItemLayout}>
                   <Form.Item label={intl.formatMessage(messages.yourName)}>
                     <Input value="Samatha Phan"/>
                   </Form.Item>
                   <Form.Item label="Email">
                     <Input value="samatha@gmail.com" type="email"/>
                   </Form.Item>
                   <Form.Item label={intl.formatMessage(messagesHome.phone)}>
                     <Input value="1234567892" type="tel"/>
                   </Form.Item>
                   <Form.Item label={intl.formatMessage(messages.password)}>
                     <Input.Password value="1234567892"/>
                   </Form.Item>
                   <Form.Item
                       wrapperCol={{
                         md: {span: 24, offset: 0},
                       }}
                       className="div-btn"
                   >
                     <Button className="add-btn">{intl.formatMessage(messages.save)}</Button>
                   </Form.Item>
                 </Form>
               </div>
             </Col>
           </Row>
         </div>
        </Content>
      </Layout>
    );
  }
}
export default (Form.create()(Profile));
