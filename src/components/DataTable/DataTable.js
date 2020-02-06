import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination, Table, Tooltip } from 'antd';
import objectAssign from 'object-assign';
import isEqual from 'react-fast-compare';
import $$ from 'cmn-utils';
import cx from 'classnames';
// eslint-disable-next-line import/no-cycle
import { EditableCell } from './Editable';
import './style/index.less';

/**
 * Data table
 */
class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRowKeys: props.selectedRowKeys,
      selectedRows: this.getSelectedRows(props.selectedRowKeys),
      // tableHeight: null
    };
  }

  // Convert value to object array
  getSelectedRows(value, oldValue = []) {
    const { rowKey } = this.props;
    if (value) {
      return value.map(item => {
        const oldv = oldValue.filter(jtem => jtem[rowKey] === item)[0];
        return typeof item === 'object' ? item : oldv || { [rowKey]: item };
      });
    }
    return [];
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { selectedRows } = this.state;
    const newState = {};
    if (!isEqual(this.props.selectedRowKeys, nextProps.selectedRowKeys)) {
      newState.selectedRowKeys = nextProps.selectedRowKeys;
      newState.selectedRows = this.getSelectedRows(
        nextProps.selectedRowKeys,
        selectedRows
      );
      this.setState(newState);
    }
  }

  tableOnRow = (record) => {
    const { selectType } = this.props;

    const keys = selectType === 'radio' ? [] : this.state.selectedRowKeys || [];
    const rows = selectType === 'radio' ? [] : this.state.selectedRows || [];

    const i = keys.indexOf(record[this._rowKey]);
    if (i !== -1) {
      keys.splice(i, 1);
      rows.splice(i, 1);
    } else {
      keys.push(record[this._rowKey]);
      rows.push(record);
    }

    this.onSelectChange(keys, rows);
  };

  onSelectChange = (selectedRowKeys, selectedRows) => {
    // Use the keys to re-filter the rows based on the key, solve the problem of keys and rows are not synchronized
    // and add a rowKey field to each line
    const temp = selectedRows.filter(
      item => selectedRowKeys.indexOf(item[this._rowKey]) !== -1
    );

    this.setState({ selectedRowKeys, selectedRows: temp }, () => {
      this.props.onSelect && this.props.onSelect(selectedRowKeys, temp);
    });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const pageNum = pagination.current || pagination;

    const sortMap = sorter.field
      ? {
        [sorter.field]: sorter.order === 'ascend' ? 'asc' : 'desc'
      }
      : sorter;
    this.props.onChange &&
      this.props.onChange({ pageNum, filters, sorter: sortMap });
  };

  onShowSizeChange = (pageNum, pageSize) => {
    this.props.onChange && this.props.onChange({ pageNum, pageSize });
  };

  render() {
    const {
      prefixCls,
      className,
      columns,
      dataItems,
      showNum,
      alternateColor,
      onChange,
      selectType,
      rowSelection,
      isScroll,
      pagination,
      rowKey,
      ...otherProps
    } = this.props;

    const classname = cx(prefixCls, className, {
      'table-row-alternate-color': alternateColor
    });

    let colRowKey = '';
    // Default width
    const cols = columns
      .filter(col => {
        if (col.primary) colRowKey = col.name;
        return !!col.tableItem;
      })
      .map(col => {
        const item = col.tableItem;
        // Select dictionary enhancement
        if (col.dict && !item.render) {
          item.render = (text) => (
            col.dict &&
              col.dict
                .filter(dic => dic.code === text)
                .map(dic => dic.codeName)[0]
          );
        }
        // Renders this column with the specified type if the type field is specified
        const myRender = item.render;
        if (item.type) {
          item.render = (text, record, index) => {
            if ($$.isFunction(item.editing) && item.editing(text, record)) {
              return (
                <EditableCell
                  text={text}
                  record={record}
                  index={index}
                  field={col}
                />
              );
            }
            return $$.isFunction(myRender)
              ? myRender(text, record, index)
              : text;

          };
        }
        return {
          title: col.title,
          dataIndex: col.name,
          ...item
        };
      })
      // Save rowkey in record
      .concat({
        dataIndex: '_rowkey',
        width: 0,
        render(text, record) {
          return <div style={{ display: 'none', }}>{record[rowKey || colRowKey]}</div>;
        }
      });

    // Display line number
    if (showNum) {
      cols.unshift({
        title: 'Serial number',
        width: 50,
        dataIndex: '_num',
        render(text, record, index) {
          const { pageNum, pageSize } = dataItems;
          if (pageNum && pageSize) {
            return (pageNum - 1) * pageSize + index + 1;
          }
          // No paging
          return index + 1;

        }
      });
    }

    // Pagination
    const paging = objectAssign(
      {
        showSizeChanger: true,
        showQuickJumper: true,
        // showTotal: total => `Total ${total}`,
        showTotal: total => `total ${total} article`,
        onShowSizeChange: this.onShowSizeChange
      },
      dataItems.pageSize && { pageSize: dataItems.pageSize },
      dataItems.pageNum && { current: dataItems.pageNum },
      dataItems.total && { total: dataItems.total },
      pagination
    );

    const _rowSelection = {
      type: selectType === 'radio' ? 'radio' : 'checkbox',
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: this.onSelectChange,
      ...rowSelection
    };

    this._rowKey = rowKey || colRowKey;

    return (
      <div className={classname}>
        <Table
          size="small"
          rowSelection={selectType ? _rowSelection : null}
          onRow={
            selectType
              ? (record, index) => ({
                onClick: () => this.tableOnRow(record, index)
              })
              : () => {}
          }
          scroll={isScroll ? objectAssign({ x: true }) : {}}
          bodyStyle={{ overflowX: 'auto' }}
          columns={cols}
          pagination={pagination ? paging : false}
          dataSource={dataItems.list}
          onChange={this.handleTableChange}
          rowKey={this._rowKey}
          {...otherProps}
        />
      </div>
    );
  }
}

/**
 * Operating area, preventing upward bubbling
 */
export const Oper = prop => (
  <div role="presentation" className="table-row-button" onClick={e => e.stopPropagation()}>
    {prop.children}
  </div>
);

export const Tip = prop => (
  <Tooltip placement="topLeft" title={prop.children}>
    <div className="nobr" style={prop.style}>
      {prop.children}
    </div>
  </Tooltip>
);

export function Paging(props) {
  const { dataItems, onChange, ...otherProps } = props;
  const { total, pageSize, pageNum } = dataItems;
  const paging = {
    total,
    pageSize,
    current: pageNum,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: number => `total ${number} article`,
    onShowSizeChange: (num, size) => onChange({ pageNum: num, pageSize: size }),
    onChange: num => onChange({ pageNum: num }),
    ...otherProps,
  };
  return <Pagination {...paging} />;
}

Paging.propTypes = {
  dataItems: PropTypes.any,
  onChange: PropTypes.any,
};

DataTable.Oper = Oper;
DataTable.Pagination = Paging;
DataTable.Tip = Tip;

DataTable.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  rowKey: PropTypes.string,
  columns: PropTypes.array.isRequired,
  dataItems: PropTypes.object.isRequired,
  showNum: PropTypes.bool,
  alternateColor: PropTypes.bool,
  selectType: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  rowSelection: PropTypes.object,
  selectedRowKeys: PropTypes.array,
  isScroll: PropTypes.bool,
  pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
};

DataTable.defaultProps = {
  prefixCls: 'antui-datatable',
  alternateColor: true
};

export default DataTable;
