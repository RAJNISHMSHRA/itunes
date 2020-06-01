import {SONG_FETCHED,SONG_FAILURE} from '../action-list'

const initialState={
  count:0,
  songs:[]
}

const fetchSongsInfo=(state=initialState,action)=>{
 switch (action.type) {
   case SONG_FETCHED:
    return{
      count:action.payload.resultCount,
      songs:action.payload.results,
      alert:action.alert
    }
    case SONG_FAILURE:
      return{
        count:0,
        songs:[]
      }

   default:
     return state;
 }
}
export default fetchSongsInfo
