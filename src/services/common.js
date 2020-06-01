import {apiService} from './api-services'
import config from './config'


export const getSongs= (params) =>{
  const url = `${config.getSearchUrl()}`;
console.log(url)
  return apiService({
    url,
    method:'GET',
    params:{
     term:params
    }
  }).then(res =>{
      return res;
    })
};