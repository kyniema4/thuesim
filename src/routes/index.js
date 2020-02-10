import { createRoutes } from '../utils/core';
import { routerLinks } from "./constant";
import BasicLayout from '../layouts/BasicLayout';
import UserLayout from '../layouts/UserLayout';
import FrontendLayout from "../layouts/_FrontendLayout";

import NotFound from './Pages/404';
import Page403 from './Pages/403';
import Page500 from './Pages/500';
import Login from './Login';
import Register from './Register';

import Coming from './Widgets/Coming';
import Result from './Widgets/Result';
import LevelRoute from './Widgets/LevelRoute';
import BaseComponent from './Widgets/BaseComponent';
import SearchBar from './Widgets/SearchBar';
import DataTable from './Widgets/DataTable';
import Form from './Widgets/Form';
import EC from './Widgets/Charts/EC';
import G2 from './Widgets/Charts/G2';

import Icon from './UI/Icon';
import Mask from './UI/Mask';
import Editor from './UI/Editor';
import CSSAnimate from './UI/CSSAnimate';
import Alerts from './UI/Alerts';
import Button from './UI/Button';

import Dashboard from './Dashboard';
import Blank from './Blank';

import Home from './Home-Directory/Home';

import AddBalanceNumber from './Home-Directory/AddBalanceNumber';

import AutoApi from './Home-Directory/AutoApi';
import History from './Home-Directory/History';

const routesConfig = app => [
  {
    path: '/administrator/',
    title: 'System center',
    component: BasicLayout,
    indexRoute: routerLinks['Dashboard'],
    childRoutes: [
      Icon(),
      Mask(),
      Editor(),
      CSSAnimate(),
      Alerts(),
      Button(),
      SearchBar(),
      EC(app),
      G2(app),
      DataTable(app),
      Form(app),
      BaseComponent(),
      Coming(),
      Result(),
      LevelRoute(app),
      Page403(),
      Page500(),
      Dashboard(app),
      Blank(app),
      // 💬 generate admin to here
      History(app),
      AutoApi(app),
      AddBalanceNumber(app),
      Home(app),
    ]
  },
  {
    path: '/',
    title: 'Login',
    indexRoute: routerLinks['Login'],
    component: UserLayout,
    childRoutes: [
      Login(app),
      Register(app),
      NotFound()
    ]
  },
];

export default app => createRoutes(app, routesConfig);
