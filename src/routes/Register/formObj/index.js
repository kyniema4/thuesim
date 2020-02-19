import intl from 'react-intl-universal';
import messages from '../messages';

export default () => [
  {
    title: intl.formatMessage(messages.username),
    name: 'username',
    formItem: {
      // initialValue: 'admin',
      rules: [
        {
          required: true,
          message: intl.formatMessage(messages.messageUsername),
        }
      ]
    }
  },
  {
    title: intl.formatMessage(messages.password),
    name: 'password',
    formItem: {
      type: 'password',
      repeat: true,
      rules: []
    }
  },
  {
    title: intl.formatMessage(messages.email),
    name: 'email',
    formItem: {
      rules: [
        {
          required: true,
          message: intl.formatMessage(messages.messageEmail),
        },
        {
          type: 'email',
          message: intl.formatMessage(messages.messageEmailFormat)
        }
      ]
    }
  },
  // {
  //   title: intl.formatMessage(messages.firstName),
  //   name: 'first_name',
  //   formItem: {
  //     rules: [
  //       {
  //         required: true,
  //         message: intl.formatMessage(messages.messageFirstName),
  //       }
  //     ]
  //   }
  // },
  // {
  //   title: intl.formatMessage(messages.lastName),
  //   name: 'last_name',
  //   formItem: {
  //     rules: [
  //       {
  //         required: true,
  //         message: intl.formatMessage(messages.messageLastName),
  //       }
  //     ]
  //   }
  // },
  {
    title: intl.formatMessage(messages.gender),
    name: 'gender',
    dict: [
      { code: '1', codeName: 'Male' },
      { code: '2', codeName: 'Female' },
      { code: '3', codeName: 'Other' }
    ],
    formItem: {
      type: 'select',
      rules: [
        { required: true, message: intl.formatMessage(messages.messageGender) }
      ]
    }
  },
  // {
  //   title: intl.formatMessage(messages.birthday),
  //   name: 'birthday',
  //   formItem: {
  //     type: 'date',
  //     rules: [
  //       { required: true, message: intl.formatMessage(messages.messageBirthday) }
  //     ]
  //   }
  // },
  // {
  //   title: intl.formatMessage(messages.phoneNumber),
  //   name: 'phone_number',
  //   formItem: {
  //     type: 'number',
  //     rules: [
  //       { required: true, message: intl.formatMessage(messages.messagePhoneNumber) }
  //     ]
  //   }
  // },
];
