import React, { Fragment } from 'react';
import { Button } from 'antd';
import DataTable, { EditableOper, Tip } from '../../../../components/DataTable';
import Icon from '../../../../components/Icon';

export const columns1 = [
  {
    title: 'name',
    name: 'name',
    tableItem: {}
  },
  {
    title: 'age',
    name: 'age',
    tableItem: {}
  },
  {
    title: 'address',
    name: 'address',
    tableItem: {}
  },
  {
    title: 'operating',
    tableItem: {
      width: 180,
      render: () => (
        <DataTable.Oper>
          <Button tooltip="modify">
            <Icon type="edit" />
          </Button>
          <Button tooltip="delete">
            <Icon type="trash" />
          </Button>
        </DataTable.Oper>
      )
    }
  }
];

export const columns2 = [
  {
    title: 'name',
    name: 'name',
    tableItem: {}
  },
  {
    title: 'age',
    name: 'age',
    tableItem: {}
  },
  {
    title: 'address',
    name: 'address',
    tableItem: {
      width: 200,
      render: text => <Tip>{text + text + text + text + text + text}</Tip>
    }
  }
];

export const columns3 = [
  {
    title: 'Character',
    name: 'role',
    dict: [
      { code: '1', codeName: 'administrator' },
      { code: '2', codeName: 'Tourist' },
      { code: '3', codeName: 'Author' }
    ],
    tableItem: {}
  }
];

export const columns4 = [
  {
    title: 'name',
    name: 'name',
    tableItem: {}
  },
  {
    title: 'age',
    name: 'age',
    tableItem: {
      sorter: true
    }
  },
  {
    title: 'address',
    name: 'address',
    tableItem: {}
  }
];

export const columns5 = (self, editingKey) => [
  {
    title: 'name',
    name: 'name',
    tableItem: {
      type: 'input',
      editing: (text, record) => record.id === editingKey,
      rules: [{ required: true, message: 'Please enter a name!' }]
    }
  },
  {
    title: 'age',
    name: 'age',
    tableItem: {
      type: 'number',
      editing: (text, record) => record.id === editingKey
    }
  },
  {
    title: 'Character',
    name: 'role',
    dict: [
      { code: '1', codeName: 'administrator' },
      { code: '2', codeName: 'Tourist' },
      { code: '3', codeName: 'Author' }
    ],
    tableItem: {
      type: 'select',
      editing: (text, record) => record.id === editingKey
    }
  },
  {
    title: 'operating',
    tableItem: {
      width: 180,
      render: (text, record) => (
        <EditableOper>
          {form =>
            record.id === editingKey ? (
              <Fragment>
                <a role="presentation" onClick={() => self.onSave(record, form)}>save</a>
                <a role="presentation" onClick={() => self.onCancelEdit()}>cancel</a>
              </Fragment>
            ) : (
              <a role="presentation" onClick={() => self.onEdit(record)}>modify</a>
            )
          }
        </EditableOper>
      )
    }
  }
];

