import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Row, Col, Button } from 'antd';
import $$ from 'cmn-utils';

import { routerLinks } from "../../../constant";
import BaseComponent from '../../../../components/BaseComponent';
import Panel from '../../../../components/Panel';
import Form from '../../../../components/Form';
import PageHelper from '../../../../utils/pageHelper';
import {
  columns1,
  columns2,
  columns3,
  columns4,
  columns5,
  columns6,
  columns7,
  columns8,
  columns9,
  createColumns10,
  createColumns11,
  columns12
} from './columns';
const { Content } = Layout;

@connect(({ form }) => ({
  form
}))
export default class extends BaseComponent {
  onSubmit(values) {
    console.log(values);
  }

  onLoadData = treeNode => {
    const { form, dispatch } = this.props;
    const treeData = [...form.treeData];
    return new Promise(resolve => {
      dispatch({
        type: 'form/@request',
        payload: {
          valueField: 'treeData',
          url: '/tree/getAsyncTreeSelect',
          data: treeNode.props.eventKey
        },
        afterResponse: resp => {
          const loop = data => {
            data.forEach(item => {
              const temp = { ...item };
              if (temp.children) {
                loop(temp.children);
              } else if (treeNode.props.eventKey === temp.key) {
                temp.children = resp.data;
              }
              return temp;
            });
          };
          loop(treeData);
          resolve();
          return treeData;
        }
      });
    });
  };

  onLoadTableData = pageInfo => $$.post('/datatable/getList', PageHelper.requestFormat(pageInfo))
    .then(resp => PageHelper.responseFormat(resp))
    .catch(e => console.error(e));

  onLoadAutoCompleteData = value => new Promise((resolve, reject) => {
    $$.post('/form/autoComplete', value)
      .then(resp => {
        const { data } = resp;
        resolve(data.list);
      })
      .catch(e => reject(e)); // reject stop loading
  });

  render() {
    const { form } = this.props;
    const { treeData } = form;

    const record1 = {
      id: 123,
      roleType: '2', // Type cannot be wrong, can't be number 2
      roleName: 'administrator'
    };
    const columns10 = createColumns10(this, treeData);
    const columns11 = createColumns11(this);
    return (
      <Layout className="full-layout page">
        <Content>
          <Panel title="Description">
            <h3>Form usage</h3>
            <p>
              Form usually combines
              <Link to={routerLinks['WidgetsColumns']}>Columns</Link>
              To use, its data structure is defined by Columns, supporting multiple types of data (
              <code>
                Cascade,date,editor,text,textarea,password,select,transfer,treeSelect,table,
                Custom, checkbox, radio, autoComplete, upload, line, etc.
              </code>
              )， Extensions from ant Form component can use their api.
            </p>
          </Panel>
          <Row gutter={20}>
            <Col span={12}>
              <Panel title="Simple usage">
                <Form columns={columns1} onSubmit={this.onSubmit} />
              </Panel>
            </Col>
            <Col span={12}>
              <Panel title="Assignment">
                <Form
                  columns={columns1}
                  record={record1}
                  onSubmit={this.onSubmit}
                />
              </Panel>
            </Col>
          </Row>
          <Panel title="Inline style">
            <Form type="inline" columns={columns1} onSubmit={this.onSubmit} />
          </Panel>
          <Row gutter={20}>
            <Col span={12}>
              <Panel title="Initial value">
                <Form columns={columns2} onSubmit={this.onSubmit} />
              </Panel>
            </Col>
            <Col span={12}>
              <Panel title="form validation">
                <Form columns={columns3} onSubmit={this.onSubmit} />
              </Panel>
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={12}>
              <Panel title="User login">
                <Form columns={columns4} onSubmit={this.onSubmit} />
              </Panel>
            </Col>
            <Col span={12}>
              <Panel title="User registration">
                <Form columns={columns5} onSubmit={this.onSubmit} />
              </Panel>
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={12}>
              <Panel title="Date time">
                <Form columns={columns6} onSubmit={this.onSubmit} />
              </Panel>
            </Col>
            <Col span={12}>
              <Panel title="Multiple columns (using col and formItemLayout)">
                <Form columns={columns7} onSubmit={this.onSubmit} />
              </Panel>
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={12}>
              <Panel title="Custom submit button">
                <Form
                  ref={node => { this.customBtnForm = node }}
                  columns={columns5}
                  footer={
                    <Button
                      style={{ display: 'block', margin: '0 auto' }}
                      size="large"
                      onClick={() => {
                        const formElm = this.customBtnForm;
                        formElm.validateFields((err, values) => {
                          if (!err) {
                            console.log('Custom submission:', values)
                          }
                        });
                      }}
                    >
                      registered
                    </Button>
                  }
                />
              </Panel>
            </Col>
            <Col span={12}>
              <Panel title="Shuttle box">
                <Form columns={columns8} onSubmit={this.onSubmit} />
              </Panel>
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={12}>
              <Panel title="Cascade & Dropdown Tree & Autocomplete">
                <Form columns={columns10} onSubmit={this.onSubmit} />
              </Panel>
            </Col>

            <Col span={12}>
              <Panel title="The drop-down box is bound to the container and will not be chained when scrolling">
                <Form appendTo columns={columns1} onSubmit={this.onSubmit} />
              </Panel>
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={12}>
              <Panel title="Custom type">
                <Form columns={columns9} onSubmit={this.onSubmit} />
              </Panel>
              <Panel title="Radio & check">
                <Form columns={columns12} onSubmit={this.onSubmit} />
              </Panel>
            </Col>
            <Col span={12}>
              <Panel title="Table type for large data volume selection">
                <Form columns={columns11} onSubmit={this.onSubmit} />
              </Panel>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}
