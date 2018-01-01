export default function companyList(state=[],action={}){
   switch(action.type){
       case "SET_COMPANIES" :
          return action.companyList
       break;
       default:return state;
   }
}