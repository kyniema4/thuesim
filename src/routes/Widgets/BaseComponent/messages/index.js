export const scope = 'routes.BaseComponent';

export default ({
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Description',
  },
  baseComponent: {
    id: `${scope}.baseComponent`,
    defaultMessage: 'BaseComponent',
  },
  baseText: {
    id: `${scope}.baseText`,
    defaultMessage: 'A base class that can be used by all routing pages. You can extract public methods into such classes, such as basic CRUD methods, route jumps, basic popups, etc.',
  },
  notice: {
    id: `${scope}.notice`,
    defaultMessage: 'Notice',
  },
  router: {
    id: `${scope}.router`,
    defaultMessage: 'Router',
  },
  backHomepage: {
    id: `${scope}.backHomepage`,
    defaultMessage: 'Back to the homepage',
  },
});
