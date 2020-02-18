import { routerRedux } from 'dva/router';
import $$ from 'cmn-utils';

import { routerLinks } from "../../constant";
import { login } from '../service';

export default {
  namespace: 'login',

  state: {
    loggedIn: false,
    message: '',
    user: {},
  },

  subscriptions: {
    setup({ history }) {
      return history.listen(({ pathname }) => {
        if (pathname.indexOf(routerLinks['Login']) !== -1) {
          $$.removeStore('user');
        }
      });
    }
  },

  effects: {
    *login({ payload }, { call, put }) {
      const { status, message, data } = yield call(login, payload);
      if (status) {
        $$.setStore('user', data);
        yield put(routerRedux.replace(routerLinks['Home']));
      } else {
        yield put({
          type: 'loginError',
          payload: { message }
        });
      }
    },
    // *logout(_, { put }) {}
  },

  reducers: {
    loginSuccess(state, { payload }) {
      return {
        ...state,
        loggedIn: true,
        message: '',
        user: payload
      };
    },
    loginError(state, { payload }) {
      return {
        ...state,
        loggedIn: false,
        message: payload.message
      };
    },
  }
};
