export const scope = 'routes.Alerts';

export default ({
  notification: {
    id: `${scope}.notification`,
    defaultMessage: 'Notification',
  },
  notificationText: {
    id: `${scope}.notificationText`,
    defaultMessage: 'We include two notification styles by default. When your component inherits from BaseCompoent, you can use this.notice to issue the default notification style configured in config.js, or you can implement your own notification class by implementing the Notification interface.',
  },
  notificationNormal: {
    id: `${scope}.notificationNormal`,
    defaultMessage: 'Normal notice',
  },
  success: {
    id: `${scope}.success`,
    defaultMessage: 'Success',
  },
  failure: {
    id: `${scope}.failure`,
    defaultMessage: 'Failure',
  },
  note: {
    id: `${scope}.note`,
    defaultMessage: 'Note',
  },
  antdNote: {
    id: `${scope}.antdNote`,
    defaultMessage: 'Antd note',
  },
});
