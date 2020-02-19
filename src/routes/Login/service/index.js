import $$ from 'cmn-utils';
import url from '../../../base_url'
export async function login(payload) {
  return fetch(url.url+'/users/login',{
    method: "POST",
    headers:{'content-type':'application/json'},
    body:JSON.stringify(payload)
  }).then(json=>{
    return json.json()
  }).then(data =>{
    return data
  }).catch(err=>{
    return err
  })
}