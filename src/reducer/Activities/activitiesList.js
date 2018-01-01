export default function activityList(state=[],action={}){
   switch(action.type){
       case "SET_ACTIVITIES" :
          return action.activityList
       break;
       default:return state;
   }
}