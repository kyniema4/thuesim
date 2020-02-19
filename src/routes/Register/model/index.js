// import modelEnhance from '../../../utils/modelEnhance';
// import { register } from '../service';

// export default modelEnhance({
//   namespace: 'register',

//   state: {
//     status: undefined,
//   },

//   effects: {
//     *submit({ payload }, { call, put }) {
//       console.log(payload)
//       const response = yield call(register, payload);
//       yield put({
//         type: 'registerHandle',
//         payload: response,
//       });
//     },
//   },

//   reducers: {
//     registerHandle(state, { payload }) {
//       return {
//         ...state,
//         status: payload.status,
//       };
//     },
//   },
// });

import modelEnhance from '../../../utils/modelEnhance';
import { register } from '../service';
import { routerRedux } from 'dva/router';
import { routerLinks } from "../../constant";


export default modelEnhance({
  namespace: 'register',

  state: {
    status: undefined,
  },

  effects: {
    *submit({ payload }, { call, put }) {
      const status = yield call(register, payload);
      if (status.success === true) {
        alert('SUCCESS!!!')
        yield put(routerRedux.replace(routerLinks['Login']));
      } else {
        alert(status.data)
        return
      }
    },
  },
});
