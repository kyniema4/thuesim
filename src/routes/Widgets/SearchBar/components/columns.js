import React from 'react';
import { Input, Icon } from 'antd';

export const columns1 = [
  {
    title: 'Role type', // translate
    name: 'roleType',
    dict: [
      { code: '1', codeName: '111' },
      { code: '2', codeName: '222' },
      { code: '3', codeName: '333' }
    ],
    searchItem: {
      type: 'select'
    }
  },
  {
    title: 'Role name',// translate
    name: 'roleName',
    searchItem: {}
  },
  {
    title: 'Order',// translate
    name: 'order',
    searchItem: {
      type: 'number',
      min: 1,
      max: 99
    }
  }
];

export const columns2 = [
  {
    title: 'Role name',// translate
    name: 'roleName',
    searchItem: {}
  },
  {
    title: 'Role type',// translate
    name: 'roleType',
    dict: [
      { code: '1', codeName: '111' },
      { code: '2', codeName: '222' },
      { code: '3', codeName: '333' }
    ],
    searchItem: {
      type: 'select'
    }
  },
  {
    title: 'Order',// translate
    name: 'order',
    searchItem: {
      type: 'number'
    }
  }
];

export const columns3 = [
  {
    title: 'Selection period',// translate
    name: 'date1',
    searchItem: {
      type: 'date'
    }
  },
  {
    title: 'Selection period',// translate
    name: 'date2',
    searchItem: {
      type: 'date~',
      width: 300,
      placeholder: ['This is the start time', 'This is the end time']// translate
    }
  },
  {
    title: 'Selection period',// translate
    name: 'date3',
    searchItem: {
      type: 'month'
    }
  }
];

export const columns4 = [
  {
    title: 'Con 1',// translate
    name: 'key1',
    searchItem: {}
  },
  {
    title: 'Con 2',// translate
    name: 'key2',
    searchItem: {}
  },
  {
    title: 'Con 3',// translate
    name: 'key3',
    searchItem: {}
  },
  {
    title: 'Con 4',// translate
    name: 'key4',
    searchItem: {}
  },
  {
    title: 'Con 5',// translate
    name: 'key5',
    searchItem: {}
  },
  {
    title: 'Con 6',// translate
    name: 'key6',
    searchItem: {}
  },
  {
    title: 'Con 7',// translate
    name: 'key7',
    searchItem: {}
  },
  {
    title: 'Con 8',// translate
    name: 'key8',
    searchItem: {}
  },
  {
    title: 'Con 9',// translate
    name: 'key9',
    searchItem: {}
  }
];

export const columns5 = [
  {
    title: 'address',
    name: 'key1',
    searchItem: {
      type: 'cascade',
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou'
            }
          ]
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing'
            }
          ]
        }
      ]
    }
  },
  {
    title: 'address1',
    name: 'key2',
    searchItem: {
      type: 'treeSelect',
      treeData: [
        {
          value: 'zhejiang',
          title: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              title: 'Hangzhou'
            }
          ]
        },
        {
          value: 'jiangsu',
          title: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              title: 'Nanjing'
            }
          ]
        }
      ]
    }
  }
];

export const columns6 = [
  {
    title: 'Icon',// translate
    name: 'key',
    searchItem: {
      type: 'custom',
      render: (record, form) => {
        // ...
        const { getFieldDecorator } = form;
        return getFieldDecorator('userName', {
          rules: [{ required: true, message: 'Please enter user name!' }]// translate
        })(
          <Input
            prefix={<Icon type="user" style={{ fontSize: 13, }} />}
            placeholder="Username"// translate
          />
        );
      }
    }
  }
];
