import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Layout, Button, Icon, Input, Checkbox, Spin, Select, Row, Col, Typography } from 'antd';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';

import { routerLinks } from "../../constant";
import messages from '../messages';
import { appLocales } from '../../../i18n';
import './index.less';

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const FormItem = Form.Item;
const { Option } = Select;

@connect(({ login, loading, global }) => ({
  global,
  login,
  loading: loading.models.login
}))
class Login extends Component {
  handleSubmit = e => {
    const { form, dispatch } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'login/login',
          payload: values
        });
      }
    });
  };

  changeLanguage = (value) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'global/setLocale',
      payload: value
    });
  };

  render() {
    const { form, loading } = this.props;
    const { locale } = this.props.global;
    const { getFieldDecorator } = form;

    return (
      <Layout className="full-layout login-page">
        <Content>
          <Row type="flex" className="height-full">
            <Col className="aside">
              <Spin tip={intl.formatMessage(messages.logging)} spinning={!!loading}>
                <Row type="flex" justify="space-between" align="middle" className="height-full">
                  <Row type="flex" justify="center" align="middle">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                      <div className="user-img">
                        <img src='/images/logo1.png' alt="logo" />
                        <Title level={4}>Sign In To Admin Panel</Title>
                      </div>
                      <FormItem>
                        {getFieldDecorator('userName', {
                          initialValue: 'admin',
                          rules: [{ required: true, message: intl.formatMessage(messages.usernameMessage)}]
                        })(
                          <Input
                            prefix={<Icon type="user" />}
                            placeholder={intl.formatMessage(messages.username)}
                          />
                        )}
                      </FormItem>
                      <FormItem>
                        {getFieldDecorator('password', {
                          initialValue: 'admin',
                          rules: [{ required: true, message: intl.formatMessage(messages.passwordMessage)}]
                        })(
                          <Input
                            prefix={<Icon type="lock" />}
                            type="password"
                            placeholder={intl.formatMessage(messages.password)}
                          />
                        )}
                      </FormItem>
                      <FormItem>
                        {getFieldDecorator('remember', {
                          valuePropName: 'checked',
                          initialValue: true
                        })(<Checkbox>
                          {intl.formatMessage(messages.remember)}
                        </Checkbox>)}
                        <Link className="login-form-forgot" to="#">
                          {intl.formatMessage(messages.forgot)}
                        </Link>
                      </FormItem>
                      <FormItem className="text-center">
                        <Button
                          shape="round"
                          type="primary"
                          htmlType="submit"
                          className="login-form-button"
                        >
                          {intl.formatMessage(messages.signIn)}
                        </Button>
                      </FormItem>
                    </Form>
                  </Row>
                  <Col className="select">
                    <Select defaultValue={locale} onChange={(value) => this.changeLanguage(value)}>
                      {appLocales.map(item => (
                        <Option key={item} value={item}>{intl.formatMessage(messages[item])}</Option>
                      ))}
                    </Select>
                  </Col>
                  <Col className="new-user">
                    {intl.formatMessage(messages.newUser)} <Link to={routerLinks['Register']}>{intl.formatMessage(messages.signUp)}</Link>
                  </Col>
                </Row>
              </Spin>
            </Col>
            <Row className="content" type="flex" justify="center" align="middle">
              <div>
                <Title>{intl.formatMessage(messages.title)}</Title>
                <Paragraph>{intl.formatMessage(messages.description)}</Paragraph>
              </div>
            </Row>
          </Row>
        </Content>
      </Layout>
    );
  }
}

Login.propTypes = {
  loading: PropTypes.bool,
  global: PropTypes.object,
  form: PropTypes.object,
  dispatch: PropTypes.func,
};

Login.defaultProps = {
};

export default Form.create()(Login);
