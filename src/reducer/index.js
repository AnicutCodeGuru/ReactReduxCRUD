import {combineReducers} from "redux";
import companyList  from "./Companies/companyList";
import activityList  from "./Activities/activitiesList";
import recordedActivityList  from "./RecordedActivities/recordedActivityList";
import menuDetl from "./MenuList";

export default combineReducers({
    activityList,
    companyList,
    menuDetl,
    recordedActivityList
})