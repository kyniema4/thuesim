import { dynamicWrapper, createRoute } from '../../../../utils/core';
import { routerLinks } from "../../../constant";

const routesConfig = app => ({
  path: routerLinks['WidgetsChartsG2'],
  title: 'G2',
  component: dynamicWrapper(app, [], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
