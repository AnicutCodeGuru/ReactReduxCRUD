export const SET_COMPANIES = "SET_COMPANIES";
export const SET_ACTIVITIES = "SET_ACTIVITIES";
export const SET_RECORDED_ACTIVITIES = "SET_RECORDED_ACTIVITIES";
export const SET_ACTIVE_MENU = "SET_ACTIVE_MENU";

/**
 * Action to set the company List
 * @param {*} companyList 
 */
export function setCompanies(companyList){
    return {
        type:SET_COMPANIES,
        companyList
    }
}

/**
 * Action to set the Activity  List
 * @param {*} companyList 
 */
export function setActivies(activityList){
   return {
        type:SET_ACTIVITIES,
        activityList
    }
}

/**
 * Action to set the Recorded Activity  List
 * @param {*} recordedActivityList 
 */
export function setRecordedActivies(recordedActivityList){
   return {
        type:SET_RECORDED_ACTIVITIES,
        recordedActivityList
    }
}


/**
 * Function to set the current active menu.
 * @param {*} activeMenuDetl 
 */
export function setActiveMenu(activeMenuDetl){
    return {
        type:SET_ACTIVE_MENU,
        payLoad:activeMenuDetl.payLoad
    }
}

/**
 * Function to fetch the company from backend.
 */
export function fetchCompanyList(){
    return dispatch=>{
        fetch("api/companyList")
        .then(res=> res.json())
        .then(data=> dispatch(setCompanies(data.companyList)))
    }
}


/**
 * action to create the company
 * @param {*} companyName 
 */
export function createCompany(companyName){
    var payload={companyName:companyName};
   
    return dispatch=>{
        fetch("/api/createCompany/",
        {
            method: "POST",
            body: JSON.stringify(payload),
            headers : {
                "Content-Type":"application/json"
            }
        })
        .then(function(res){ return res.json(); })
        .then(data=> dispatch(fetchCompanyList()))
    }
}

/**
 * Function to fetch the activity list from backend.
 */
export function fetchActivityList(){
    return dispatch=>{
        fetch("api/activityList")
        .then(res=> res.json())
        .then(data=> dispatch(setActivies(data.activityList)))
    }
}


/**
 * Function to fetch the recorded activity list from backend.
 */
export function fetchRecordedActivityList(){
    return dispatch=>{
        fetch("api/recordedActivityList")
        .then(res=> res.json())
        .then(data=> dispatch(setRecordedActivies(data.reccordedActivityList)))
    }
}

/**
 * action to create the activity
 * @param {*} activityName 
 */
export function createActivity(activityName){
    var payload={activityName:activityName};
   
    return dispatch=>{
        fetch("/api/createActivity/",
        {
            method: "POST",
            body: JSON.stringify(payload),
            headers : {
                "Content-Type":"application/json"
            }
        })
        .then(function(res){ return res.json(); })
        .then(data=> dispatch(fetchActivityList()))
    }
}

/**
 * action to create the record a activity
 * @param {*} recordedActivityDetl 
 */
export function createRecordedActivity(recordedActivityDetl){
    var payload={
                    activityID:recordedActivityDetl.activityID,
                    companyID:recordedActivityDetl.companyID,
                    activityDesc:recordedActivityDetl.activityDesc
                };
   
    return dispatch=>{
        fetch("/api/createRecordActivity/",
        {
            method: "POST",
            body: JSON.stringify(payload),
            headers : {
                "Content-Type":"application/json"
            }
        })
        .then(function(res){ return res.json(); })
        .then(data=> dispatch(fetchRecordedActivityList()))
    }
}