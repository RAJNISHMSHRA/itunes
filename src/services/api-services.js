import axios from 'axios';


export const apiService= (options) =>{
// const request={
//     ...options,
//    dataType:'json',
//    // headers:{
//    //  'Access-Control-Allow-Origin': '*',
//    //  'Access-Control-Allow-Credentials': true,
//    //   'Accept':'application/json',
//    //   'content-type':'application/json',
//    //    'Accept-Language':'en-US'
//    // }

// }

return axios(options)
.then(res =>{
   if(res && res.data){
     return res.data
   }
})
.catch(error =>{
   return {...error.response}
})

}

