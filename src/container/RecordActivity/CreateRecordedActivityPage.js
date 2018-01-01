import React, { Component }  from 'react';
import PropTypes from 'prop-types'
import {connect}  from "react-redux";
import {createRecordedActivity} from "../../actions/";
import {fetchCompanyList} from "../../actions";
import {fetchActivityList} from "../../actions";
//import ActivityListPage from "./ActivityListPage";

class CreateRecordedActivityPage extends Component{
    constructor(){
        super();
        this.state={
                activityName:"",
                companyName:"",
                activityDesc:""
            }
    }
    handleChange(event){
        this.setState({[event.target.name] : event.target.value});
    }
    componentDidMount(){
        this.props.fetchCompanyList();
        this.props.fetchActivityList();
    }
    createRecordedActivity(){
        this.props.createRecordedActivity({
                activityID:this.state.activityName,
                companyID:this.state.companyName,
                activityDesc:this.state.activityDesc
            }
        );
        this.setState({activityName:"",companyName:"",activityDesc:""});
        let allSelectBox = document.getElementsByTagName("select");
        for(let i=0;i<allSelectBox.length;i++){
            allSelectBox[i].selectedIndex=0;  
        }
    }
    render(){
        let companyOptionsList = this.props.companyList.map((company)=>{
               return <option key={company._id} value={company._id} >{company.companyName}</option>
        })
        let activityOptionsList = this.props.activityList.map((activity)=>{
               return <option key={activity._id} value={activity._id} >{activity.activityName}</option>
        })
        return(
                <div>
                    <div className="row margin-top" >
                        <div className="col-md-2" >
                             Company Name  
                        </div>
                        <div className="col-md-4" >
                             <select name="companyName" className="form-control" onChange={(evt)=>{this.handleChange(evt)}}  >
                                <option value="">--Select Company--</option>
                                {companyOptionsList}
                             </select>
                        </div>
                    </div>
                    <div className="row margin-top" >
                        <div className="col-md-2" >
                             Activity Name 
                        </div>
                        <div className="col-md-4 " >
                             <select name="activityName" className="form-control" onChange={(evt)=>{this.handleChange(evt)}}   >
                                <option value="">--Select Activity--</option>
                                    {activityOptionsList}
                             </select>
                        </div>
                    </div>
                    <div className="row margin-top" >
                        <div className="col-md-2" >
                             Activity Description
                        </div>
                        <div className="col-md-4 " >
                             <textarea className="form-control" name="activityDesc" value={this.state.activityDesc} onChange={(evt)=>{this.handleChange(evt)}} ></textarea>
                        </div>
                    </div>
                    <div className="row  margin-top" >
                        <div className="col-md-4 col-md-offset-2" >
                            <input type="button" value="Create Activity" disabled={this.state.activityName=="" || this.state.companyName=="" || this.state.activityDesc==""} className="btn btn-primary" onClick={()=>this.createRecordedActivity()}  />
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-12" >
                            {/*<ActivityListPage/>*/}
                        </div>
                    </div>
                </div>)
    }
}



function mapSatesToProps(state){
   return {
        companyList:state.companyList,
        activityList :state.activityList,
   }
}
export default connect(mapSatesToProps,{createRecordedActivity,fetchCompanyList,fetchActivityList})(CreateRecordedActivityPage);