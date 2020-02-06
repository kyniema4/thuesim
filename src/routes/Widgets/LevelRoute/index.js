import { dynamicWrapper, createRoute } from '../../../utils/core';
import SubRoute from './routes/SubRoute';
import { routerLinks } from "../../constant";

const routesConfig = (app) => ({
  path: routerLinks['WidgetsLevelRoute'],
  title: 'Primary route',
  component: dynamicWrapper(app, [import('./model')], () => import('./components')),
  childRoutes: [
    SubRoute(app),
  ]
});

export default (app) => createRoute(app, routesConfig);
