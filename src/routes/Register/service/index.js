// import $$ from 'cmn-utils';

// export async function register(payload) {
//   return $$.post('/user/register', payload);
// }

import $$ from 'cmn-utils';
import url from '../../../base_url'
export async function register(payload) {
  return fetch(url.url+'/users/signup' , {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body : JSON.stringify(payload)
  }).then(res=>{
    return res.json()
  }).then(status=>{
    return status
  })
}