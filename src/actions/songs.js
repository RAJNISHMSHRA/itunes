
import  {SONG_FETCHED,SONG_FAILURE} from '../action-list'
import {getSongs} from '../services/common'

const fetchsongsInfo=(params)=>{
  return  (dispatch) =>{
      try{
        dispatch({type:''});
        getSongs(params).then(res=>{
          if(res.results.length){
            dispatch({type:SONG_FETCHED,payload:res})
          }
          dispatch({type:SONG_FETCHED,payload:res,alert:true})
        })
      }
      catch(err){
          dispatch({type:SONG_FAILURE,payload:{}})
      }
  }
}
export default fetchsongsInfo
