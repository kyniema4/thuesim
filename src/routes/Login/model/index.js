import { routerRedux} from 'dva/router';
import $$ from 'cmn-utils';
import {Redirect} from "react-router-dom"
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
          if(pathname.indexOf('login') !== -1 )
          {
            $$.removeStore('user');
            $$.removeStore('remember');
          }
          else
          {
            if($$.getStore('remember') == true)
            {
              history.push('/administrator/dashboard')
            }
            else
            {
              $$.removeStore('user');
              $$.removeStore('remember');
            }
          }
        }
      });
    }
  },

  effects: {
    *login({ payload }, { call, put }) {
      const { success, message, data } = yield call(login, payload);
      if (success ===true) {
        if(payload.remember == true)
        {
          $$.setStore('remember', payload.remember)
        }
        $$.setStore('user', data.token);
        yield put(routerRedux.replace(routerLinks['Dashboard']));
      }
      else {
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
