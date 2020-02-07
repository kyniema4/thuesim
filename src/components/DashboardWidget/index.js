import './style/index.less';
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Form, Typography, Icon} from 'antd';
import intl from "react-intl-universal";
import messages from './messages';
import Panel from "../Panel";
const {Title, Text, Paragraph} = Typography;

const DashboardWidget = ({ className }) => (
    <Row className={className} gutter={20}>
        <Col md={12} lg={6}>
            <Panel className="panel-first" header={false} cover>
                <Paragraph className="title">{intl.formatMessage(messages.totalMoney)}</Paragraph>
                <Title level={2} className="number-dashboard">0</Title>
                <Paragraph className="sub-title">
                    <Text className="percent">4%</Text>
                    <Text>{intl.formatMessage(messages.fromLastWeek)}</Text>
                </Paragraph>
            </Panel>
        </Col>
        <Col md={12} lg={6}>
            <Panel className="panel-second" header={false} cover>
                <Paragraph className="title">{intl.formatMessage(messages.used)}</Paragraph>
                <Title level={2} className="number-dashboard">0</Title>
                <Paragraph className="sub-title">
                    <Text className="percent"> <Icon type="caret-up" />3%</Text>
                    <Text>{intl.formatMessage(messages.fromLastWeek)}</Text>
                </Paragraph>
            </Panel>
        </Col>
        <Col md={12} lg={6}>
            <Panel className="panel-third" header={false} cover>
                <Paragraph className="title">{intl.formatMessage(messages.totalCode)}</Paragraph>
                <Title level={2} className="number-dashboard">0</Title>
                <Paragraph className="sub-title">
                    <Text className="percent"><Icon type="caret-up" />34%</Text>
                    <Text>{intl.formatMessage(messages.fromLastWeek)}</Text>
                </Paragraph>
            </Panel>
        </Col>
        <Col md={12} lg={6}>
            <Panel className="panel-four" header={false} cover>
                <Paragraph className="title">{intl.formatMessage(messages.totalError)}</Paragraph>
                <Title level={2} className="number-dashboard">0</Title>
                <Paragraph className="sub-title">
                    <Text className="percent"> <Icon type="caret-up" />34%</Text>
                    <Text>{intl.formatMessage(messages.fromLastWeek)}</Text>
                </Paragraph>
            </Panel>
        </Col>
    </Row>
);

DashboardWidget.propTypes = {
  className: PropTypes.string,
};

DashboardWidget.defaultProps = {
  className: 'component-dashboardwidget',
};

export default DashboardWidget;
