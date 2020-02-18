import $$ from 'cmn-utils';

import { routerLinks } from "../routes/constant";
import modelEnhance from '../utils/modelEnhance';
import { DEFAULT_LOCALE } from '../i18n';

export default modelEnhance({
  namespace: 'global',

  state: {
    menu: [],
    flatMenu: [],
    locale: DEFAULT_LOCALE,
  },

  effects: {
    *getMenu({ payload }, { call, put }) {
      // const { status, data } = yield call(getMenu, payload);
      // if (status) {

      // }
      const data = [
        // { name: 'Dashboard', icon: 'dashboard', path: routerLinks['Dashboard'], },
        // {
        //   name: 'Component',
        //   icon: 'desktop',
        //   path: '/administrator/component',
        //   children: [
        //     { name: 'Toolbar', path: routerLinks['WidgetsToolbar'], },
        //     { name: 'Base Component', path: routerLinks['WidgetsBaseComponent'], },
        //     { name: 'Search Bar', path: routerLinks['WidgetsSearchBar'], },
        //     { name: 'Datatable', path: routerLinks['WidgetsDataTable'], },
        //     { name: 'Form', path: routerLinks['WidgetsForm'], },
        //     {
        //       name: 'Charts',
        //       path: '/administrator/charts',
        //       children: [
        //         { name: 'ECharts', path: routerLinks['WidgetsChartsEC'], },
        //         { name: 'G2', path: routerLinks['WidgetsChartsG2'], },
        //       ]
        //     },
        //   ],
        // },
        // {
        //   name: 'UI Element',
        //   icon: 'share-alt',
        //   path: '/administrator/ui',
        //   children: [
        //     { name: 'Button', path: routerLinks['UIButton'], },
        //     { name: 'Alerts', path: routerLinks['UIAlerts'], },
        //     { name: 'Animations', path: routerLinks['UICSSAnimate'], },
        //     { name: 'Icons', path: routerLinks['UIIcon'], },
        //     { name: 'Editor', path: routerLinks['UIEditor'], },
        //     { name: 'Mask', path: routerLinks['UIMask'], },
        //   ],
        // },
        // {
        //   name: 'Page',
        //   icon: 'book',
        //   path: '/administrator/page',
        //   children: [
        //     { name: 'Login', path: routerLinks['Login'], },
        //     { name: 'Register', path: routerLinks['Register'], },
        //     { name: 'Blank', path: routerLinks['Blank'], },
        //     { name: 'Result', path: routerLinks['WidgetsResult'], },
        //     { name: 'Coming Soon', path: routerLinks['WidgetsComing'], },
        //     { name: '403', path: routerLinks['Pages403'], },
        //     { name: '404', path: routerLinks['Pages404'], },
        //     { name: '500', path: routerLinks['Pages500'], },
        //     { name: 'Multi-level routing', path: routerLinks['WidgetsLevelRoute'], },
        //     { name: 'Drop Drag', path: routerLinks['DropDrag'], },
        //   ],
        // },
        {
          name: 'TRANG CHỦ',
          icon: 'home',
          path: '/administrator/home-directoty',
          children: [
            { name: 'Home', path: routerLinks['Home'], },
            { name: 'Nạp số dư', path: routerLinks['AddBalanceNumber'], },
            { name: 'Auto API', path: routerLinks['AutoApi'], },
            { name: 'Lịch sử', path: routerLinks['History'], },

          ],
        },
        {
          name: 'NGƯỜI BÁN',
          icon: 'setting',
          path: '',
          children: [
            { name: 'Dashboard', path: routerLinks['Dashboard'], },

          ],
        },
        {
          name: 'LIÊN HỆ',
          icon: 'idcard',
          path: '',
          children: [
            { name: 'TRANG SIMCODE', path: 'https://www.facebook.com' },
            { name: 'QUẢN TRỊ VIÊN', path: 'https://www.facebook.com' },
            { name: 'NHÀ PHÁT TRIỂN', path: 'https://www.facebook.com' },
          ],
        },
      ]
      const loopMenu = (menu, pitem = {}) => {
        menu.forEach(item => {
          if (pitem.path) {
            item.parentPath = pitem.parentPath ? pitem.parentPath.concat(pitem.path) : [pitem.path];
          }
          if (item.children && item.children.length) {
            loopMenu(item.children, item);
          }
        });
      };
      loopMenu(data);

      yield put({
        type: 'getMenuSuccess',
        payload: data,
      });
    },
    *setLocale({payload}, {put}) {
      yield put({
        type: 'setLocaleSuccess',
        payload,
      });
    }
  },

  reducers: {
    getMenuSuccess(state, { payload }) {
      return {
        ...state,
        menu: payload,
        flatMenu: getFlatMenu(payload),
      };
    },
    setLocaleSuccess(state, { payload }) {
      return {
        ...state,
        locale: payload,
      };
    },
  },
});

export function getFlatMenu(menus) {
  let menu = [];
  menus.forEach(item => {
    if (item.children) {
      menu = menu.concat(getFlatMenu(item.children));
    }
    menu.push(item);
  });
  return menu;
}

// export async function getMenu(payload) {
//   return $$.post('/user/menu', payload);
// }
