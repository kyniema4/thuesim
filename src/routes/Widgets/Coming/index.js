import React from 'react';
import { createRoute } from '../../../utils/core';
import { Coming } from '../../../components/Pages';
import { routerLinks } from "../../constant";

const routesConfig = () => ({
  path: routerLinks['WidgetsComing'],
  title: 'Coming Soon',
  component: () => (
    <Coming
      title="Wonderful upcoming"
      value={Date.now() + 1000 * 60 * 60 * 24 * 2}
    />
  )
});

export default app => createRoute(app, routesConfig);
