import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import intl from 'react-intl-universal';
import PropTypes from 'prop-types';
import { Row, Col, Progress, Layout, Typography, } from 'antd';

import { routerLinks } from "../../constant";
import messages from '../messages';
import './index.less';
import '../../Login/components/index.less';
import Success from './Success';
import Form from '../../../components/Form';
import formObj from '../formObj';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception'
};

@connect(({ register, loading }) => ({
  register,
  submitting: loading.effects['register/submit']
}))
class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      visible: false,
      registerSuccess: false,
    }
  }

  componentWillReceiveProps(nextProps, nextContent) {
    if (nextProps.register.status) {
      this.setState({
        registerSuccess: true
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getPasswordStatus = () => {
    const { form } = this.props;
    const value = form.getFieldValue('password');
    if (value && value.length > 9) {
      return 'ok';
    }
    if (value && value.length > 5) {
      return 'pass';
    }
    return 'poor';
  };

  handleSubmit = values => {
    const { dispatch } = this.props;
    dispatch({
      type: 'register/submit',
      payload: { ...values }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    const { confirmDirty } = this.state;
    this.setState({ confirmDirty: confirmDirty || !!value });
  };

  checkConfirm = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback(
        intl.formatMessage(messages.passwordsTwice)
      )}
    else {
      callback();
    }
  };

  checkPassword = (rule, value, callback) => {
    if (!value) {
      this.setState({
        visible: !!value
      });
      callback('error');
    } else {
      const { visible, confirmDirty } = this.state;
      if (!visible) {
        this.setState({
          visible: !!value
        });
      }
      if (value.length < 6) {
        callback('error');
      } else {
        const { form } = this.props;
        if (value && confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      }
    }
  };

  renderPasswordProgress = () => {
    const { form } = this.props;
    const value = form.getFieldValue('password');
    const passwordStatus = this.getPasswordStatus();
    return value && value.length ? (
      <Progress
        status={passwordProgressMap[passwordStatus]}
        className={`progress-${passwordStatus}`}
        strokeWidth={6}
        percent={value.length * 10 > 100 ? 100 : value.length * 10}
        showInfo={false}
      />
    ) : null;
  };

  render() {
    const { submitting } = this.props;
    const { registerSuccess } = this.state;
    if (registerSuccess) {
      return <Success />;
    }
    return (
      <Layout className="full-layout register-page login-page">
        <Content>
          <Row type="flex" className="height-full">
            <Col className="aside">
              <Row type="flex" justify="space-between" align="middle" className="height-full">
                <Row type="flex" justify="center" align="middle">
                  <div className="login-form">
                    <div className="user-img">
                      <img src='/images/logo1.png' alt="logo" />
                      <Title level={4}>Sign up To Admin Panel</Title>
                    </div>
                    <Form
                      type="grid"
                      columns={formObj()}
                      onSubmit={this.handleSubmit}
                      loading={submitting}
                      textSubmit={intl.formatMessage(messages.signUp)}
                    />
                  </div>
                </Row>
                <Col className="new-user">
                  <Link className="fr" to={routerLinks['Login']}>
                    {intl.formatMessage(messages.LoginNow)}
                  </Link>
                </Col>
              </Row>
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

Register.propTypes = {
  register: PropTypes.object,
  form: PropTypes.object,
  dispatch: PropTypes.func,
  submitting: PropTypes.bool,
};

export default Register;
