function debounce(delay,fn){
   let timerID;
   return function (...args) {
     if(timerID){
       clearTimeout(timerID)
     }
     timerID =setTimeout(()=>{
        fn(...args);
        timerID=null;

     },delay)
   };
}
const utilHelper ={
debounce
}
export default utilHelper;