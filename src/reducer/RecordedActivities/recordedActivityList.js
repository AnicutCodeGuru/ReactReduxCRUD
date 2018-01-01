export default function recordedActivityList(state=[],action={}){
   switch(action.type){
       case "SET_RECORDED_ACTIVITIES" :
          return action.recordedActivityList
       break;
       default:return state;
   }
}