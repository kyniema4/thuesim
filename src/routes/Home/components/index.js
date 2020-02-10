import React from 'react';
import {connect} from 'dva';
import {Layout, Col, Row, Form, Typography, List, message, Avatar, Spin, Steps, Button, Select, Input} from 'antd';
import DataSet from '@antv/data-set';
import intl from 'react-intl-universal';
import PropTypes from 'prop-types';
import messages from '../messages';

import BaseComponent from '../../../components/BaseComponent';
import DashboardWidget from '../../../components/DashboardWidget';
import Panel from '../../../components/Panel';
import './index.less';

import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
const {Content} = Layout;
const {Step} = Steps;
const {Title, Text, Paragraph} = Typography;
const data = [
  {
    id: 1,
    name: 'admin',
    email: 'Thong bao mot',
    time: '2020-06-02 09:41:16'
  }, {
    id: 2,
    name: 'admin',
    email: 'Thong bao hai',
    time: '2020-06-02 09:41:16'
  }, {
    id: 3,
    name: 'admin',
    email: 'Thong bao ba',
    time: '2020-06-02 09:41:16'
  }, {
    name: 'admin',
    email: 'Thong bao bon',
    time: '2020-06-02 09:41:16'
  }
];


function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}


@connect()
class Home extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  state = {
    loading: false,
    hasMore: true,
  };

  componentDidMount() {
    this.fetchData(res => {
      this.setState({
        data: res.results,
      });
    });
  }

  fetchData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    });
  };

  handleInfiniteOnLoad = () => {
    let {data} = this.state;
    this.setState({
      loading: true,
    });
    if (data.length > 3) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData(res => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  };

  next() {
    const current = this.state.current + 1;
    this.setState({current});
  }

  onChange(value) {
    this.setState({roomId: value})
  }

  render() {
    const {dashboard} = this.props;
    const {current} = this.state;
    const steps = [
      {
        title: 'Step 1',
        description: intl.formatMessage(messages.chooseSerive)
      }, {
        title: 'Step 2',
        description: intl.formatMessage(messages.phone)
      }, {
        title: 'Step 3',
        description: intl.formatMessage(messages.getSimcode)
      }, {
        title: 'Step 4',
        description: intl.formatMessage(messages.complete)
      },
    ];
    const serviceData = [
      {
        id: '1',
        serviceName: 'Dich vu mot'
      },
      {
        id: '2',
        serviceName: 'Dich vu hai'
      },
      {
        id: '3',
        serviceName: 'Dich vu ba'
      },
    ];
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 7,
          offset: 0,
        },
        sm: {
          span: 7,
          offset: 2,
        },
      },
      wrapperCol: {span: 10},
    };
    return (
        <Layout className="full-layout page home-page">
          <Content>
            <DashboardWidget/>
            <Panel title={intl.formatMessage(messages.notification)} className="panel-notify"
                   style={{height: 300}}>
              <InfiniteScroll
                  initialLoad={false}
                  pageStart={0}
                  loadMore={this.handleInfiniteOnLoad}
                  hasMore={!this.state.loading && this.state.hasMore}
                  useWindow={false}
              >
                <List
                    dataSource={data}
                    renderItem={item => (
                        <List.Item key={item.id}>
                          <List.Item.Meta
                              avatar={
                                <Avatar src="../images/admin.png" size="large"/>
                              }
                              title={<text>{item.name}</text>}
                              description={item.email}
                          />
                          <div className="notyfi-time">{item.time}</div>
                        </List.Item>
                    )}
                >
                  {this.state.loading && this.state.hasMore && (
                      <div className="demo-loading-container">
                        <Spin/>
                      </div>
                  )}
                </List>
              </InfiniteScroll>
            </Panel>
            <Panel title={intl.formatMessage(messages.getCode)} className="panel-service">
              <Steps progressDot current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} description={item.description}/>
                ))}
              </Steps>
              <div className="steps-content">
                {current === 0 && (
                    <Form {...formItemLayout}>
                      <Form.Item label={intl.formatMessage(messages.chooseSeriveAndNext)}>
                        <Select
                            showSearchs
                            optionFilterProp="children"
                            onChange={(e) => this.onChange(e)}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                          {serviceData.map(item => (
                              <Select.Option key={item.id} value={item.id}
                                             className="next-btn">{item.serviceName}</Select.Option>
                          ))}


                        </Select>
                      </Form.Item>
                      <Form.Item
                          wrapperCol={{
                            sm: {span: 24, offset: 0},
                          }}
                          className="div-btn"
                      >
                        <Button disabled className="disable-btn">Finish</Button>
                        <Button onClick={() => this.next()} className="next-btn">Next</Button>
                      </Form.Item>
                    </Form>
                )}
                {current === 1 && (
                    <Form {...formItemLayout}>
                      <Form.Item label={intl.formatMessage(messages.phoneAndNext)}>
                        <Input/>
                      </Form.Item>
                      <Form.Item
                          wrapperCol={{
                            sm: {span: 24, offset: 0},
                          }}
                          className="div-btn"
                      >
                        <Button disabled className="disable-btn">Finish</Button>
                        <Button onClick={() => this.next()} className="next-btn">Next</Button>
                      </Form.Item>
                    </Form>
                )}
                {current === 2 && (
                    <Form {...formItemLayout}>
                      <Form.Item label={intl.formatMessage(messages.getCodeHere)}>
                        <Input value="123456789"/>
                      </Form.Item>
                      <Form.Item
                          wrapperCol={{
                            sm: {span: 24, offset: 0},
                          }}
                          className="div-btn"
                      >
                        <Button disabled className="disable-btn">Finish</Button>
                        <Button onClick={() => this.next()} className="next-btn">Next</Button>
                      </Form.Item>
                    </Form>
                )}
                {current === 3 && (
                    <div>
                      <div>
                        <Paragraph>Get the code online is complete!</Paragraph>
                      </div>
                      <div className="div-btn">
                        <Button className="next-btn">Finish</Button>
                        <Button disabled onClick={() => this.next()}
                                className="disable-btn">Next</Button>
                      </div>
                    </div>
                )}
              </div>
            </Panel>
          </Content>
        </Layout>
    );
  }
}
export default (Form.create()(Home));

