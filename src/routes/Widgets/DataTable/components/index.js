import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Row, Col, Tree, Form } from 'antd';
import intl from 'react-intl-universal';

import { routerLinks } from "../../../constant";
import BaseComponent from '../../../../components/BaseComponent';
import Panel from '../../../../components/Panel';
import SideLayout from '../../../../components/SideLayout';
import DataTable, { Editable } from '../../../../components/DataTable';
import { columns1, columns2, columns3, columns4, columns5 } from './columns';
import './index.less';
import messages from '../messages';
import messagesBaseComponent from '../../BaseComponent/messages';
const { Content } = Layout;
const {Pagination} = DataTable;
const {TreeNode} = Tree;

@connect(({ datatable, loading }) => ({
  datatable,
  loading: loading.models.datatable
}))
class Datatable extends BaseComponent {
  state = {
    editingKey: null,
  };

  componentDidMount() {
    const { dispatch, datatable } = this.props;
    const { pageData, pageDataSort } = datatable;

    const promise = [];
    let request = dispatch({
      type: 'datatable/@request',
      payload: {
        valueField: 'pageData',
        url: '/datatable/getList',
        pageInfo: pageData.startPage(1, 10)
      }
    });
    promise.push(request);

    request = dispatch({
      type: 'datatable/@request',
      afterResponse: resp => resp.data,
      payload: {
        valueField: 'deptTreeData',
        url: '/tree/getDept'
      }
    });
    promise.push(request);

    request = dispatch({
      type: 'datatable/@request',
      afterResponse: resp => resp.data,
      payload: {
        valueField: 'dataList',
        url: '/datatable/frontPaging'
      }
    });

    promise.push(request);

    request = dispatch({
      type: 'datatable/@request',
      payload: {
        valueField: 'pageDataSort',
        url: '/datatable/getList',
        pageInfo: pageDataSort.startPage(1, 10)
      }
    });
    promise.push(request);
    Promise.all(promise).then(() => {});
  }

  renderTreeNodes = data => data.map(item => {
    if (item.children) {
      return (
        <TreeNode title={item.title} key={item.key} dataRef={item}>
          {this.renderTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return <TreeNode {...item} />;
  });

  onSelectTreeNode = (selectedKeys) => {
    console.log('onSelect', selectedKeys);

    const { dispatch, datatable } = this.props;
    const { pageData } = datatable;
    dispatch({
      type: 'datatable/@request',
      payload: {
        valueField: 'pageData',
        url: '/datatable/getList',
        pageInfo: pageData.startPage(1, 10)
      }
    });
  };

  onEdit = record => {
    this.setState({
      editingKey: record.id
    });
  };

  onCancelEdit = () => {
    this.setState({ editingKey: null });
  };

  onSave = (record, form) => {
    form.validateFields((err, values) => {
      if (!err) {
        console.log('save:', values, record);
        // Demo simulation change data
        const { dispatch, datatable } = this.props;
        const { dataList } = datatable;
        dataList.list = dataList.list.map(item => {
          if (item.id === record.id) {
            return { ...item, ...values };
          }
          return item;

        });
        dispatch({
          type: 'datatable/@change',
          payload: {
            dataList
          }
        });
        this.onCancelEdit();
      } else {
        console.log(err);
      }
    });
  };

  render() {
    const { datatable, loading } = this.props;
    const { pageData, deptTreeData, dataList, pageDataSort } = datatable;
    const dataTableProps1 = {
      loading,
      columns: columns1,
      rowKey: 'id',
      dataItems: pageData,
      onChange: () => {}
    };
    const dataTableProps2 = {
      loading,
      columns: columns1,
      rowKey: 'id',
      dataItems: pageData,
      selectType: 'checkbox',
      showNum: true,
      isScroll: true
    };
    const dataTableProps3 = {
      loading,
      columns: columns2,
      rowKey: 'id',
      dataItems: pageData,
      isScroll: true
    };
    const dataTableProps4 = {
      loading,
      columns: columns3,
      rowKey: 'id',
      selectType: 'radio',
      dataItems: pageData,
      showNum: true
    };
    const dataTableProps5 = {
      loading,
      columns: columns1,
      rowKey: 'id',
      dataItems: dataList,
      showNum: true
    };
    const dataTableProps6 = {
      loading,
      columns: columns4,
      rowKey: 'id',
      dataItems: pageDataSort,
      onChange: ({ pageNum, pageSize, sorter }) => {
        const { dispatch } = this.props;
        dispatch({
          type: 'datatable/@request',
          payload: {
            valueField: 'pageDataSort',
            url: '/datatable/getList',
            pageInfo: pageDataSort.sortBy(sorter).jumpPage(pageNum, pageSize)
          }
        });
      },
      isScroll: true
    };
    const dataTableProps7 = {
      loading,
      columns: columns5(this, this.state.editingKey),
      rowKey: 'id',
      dataItems: dataList,
      showNum: true
    };

    return (
      <Layout className="full-layout page datatable-page">
        <Content>
          <Panel title={intl.formatMessage(messagesBaseComponent.description)}>
            <h3>{intl.formatMessage(messages.dataTableUsage)}</h3>
            <p>
              {intl.formatMessage(messages.dataTableCombines)}<Link to={routerLinks['WidgetsColumns']}>{intl.formatMessage(messages.columns)}</Link>
              {intl.formatMessage(messages.dataText)}
            </p>
          </Panel>
          <Row gutter={20}>
            <Col span={12}>
              <Panel title={intl.formatMessage(messages.dataBasicUsage)} fit>
                <DataTable {...dataTableProps1} />
              </Panel>
            </Col>
            <Col span={12}>
              <Panel title={intl.formatMessage(messages.dataInnerPage)} fit>
                <DataTable pagination {...dataTableProps1} />
              </Panel>
            </Col>
          </Row>
          <Panel title={intl.formatMessage(messages.dataExternalPage)} fit>
            <DataTable {...dataTableProps1} />
            <div className="footer">
              <Pagination {...dataTableProps1} />
            </div>
          </Panel>
          <Row gutter={20}>
            <Col span={12}>
              <Panel title={intl.formatMessage(messages.lineNumber)} fit>
                <DataTable {...dataTableProps2} selectedRowKeys={[1, 2, 4]} />
              </Panel>
            </Col>
            <Col span={12}>
              <Panel title={intl.formatMessage(messages.columnhint)} fit>
                <DataTable {...dataTableProps3} />
              </Panel>
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={6}>
              <Panel title={intl.formatMessage(messages.dataDictionary)} fit>
                <DataTable {...dataTableProps4} />
              </Panel>
            </Col>
            <Col span={18}>
              <Panel title={intl.formatMessage(messages.leftTree)} fit>
                <SideLayout
                  title={intl.formatMessage(messages.organization)}
                  sideContent={
                    <Tree onSelect={this.onSelectTreeNode}>
                      {this.renderTreeNodes(deptTreeData)}
                    </Tree>
                  }
                >
                  <DataTable {...dataTableProps1} />
                </SideLayout>
              </Panel>
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={10}>
              <Panel title={intl.formatMessage(messages.frontPagePaging)} height={500} scroll fit>
                <DataTable pagination={{ pageSize: 20 }} {...dataTableProps5} />
              </Panel>
            </Col>
            <Col span={14}>
              <Panel title={intl.formatMessage(messages.sort)} height={500} scroll fit>
                <DataTable {...dataTableProps6} />
                <div className="footer">
                  <Pagination {...dataTableProps6} />
                </div>
              </Panel>
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={12}>
              <Panel title={intl.formatMessage(messages.editableLine)} height={500} scroll fit>
                <Editable pagination={{ pageSize: 20 }} {...dataTableProps7} />
              </Panel>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}
export default (Form.create()(Datatable));
