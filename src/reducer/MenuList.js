export default function (state=null,action={}){
    if(state===null){
        state= {
            activeMenu:{
                label:"Create Company",
                value:'newcompany'
            },
            MenuList:[
                {
                    label:"Create Company",
                    value:'newcompany'
                },
                {
                    label:"Create Activity",
                    value:'newactivity'
                },
                {
                    label:"Record Activity",
                    value:'recordact'
                }
            ]
        };
    }
    switch(action.type){
        case "SET_ACTIVE_MENU" :
           return {
            activeMenu:{...action.payLoad},
            MenuList:[...state.MenuList]
        }
        break;
        default:
            return state
    }
    return 
}