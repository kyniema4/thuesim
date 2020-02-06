import modelEnhance from '../../../../utils/modelEnhance';
import { routerLinks } from "../../../constant";

export default modelEnhance({
  namespace: 'form',

  state: {
    treeData: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === routerLinks['WidgetsForm']) {
          dispatch({
            type: '@request',
            afterResponse: resp => resp.data,
            payload: {
              valueField: 'treeData',
              url: '/tree/getAsyncTreeSelect',
            }
          });
        }
      });
    }
  },
});
