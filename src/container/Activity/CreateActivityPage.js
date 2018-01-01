import React, { Component }  from 'react';
import PropTypes from 'prop-types'
import {connect}  from "react-redux";
import {createActivity} from "../../actions/";
import ActivityListPage from "./ActivityListPage";

class CreateActivityPage extends Component{
    constructor(){
        super();
        this.state={activityName:""}
    }
    activityNameChanged(evt){
        this.setState({activityName:evt.target.value});
    }
    createActivity(){
        this.props.createActivity(this.state.activityName);
        this.setState({activityName:""});
    }
    render(){
        return(
                <div>
                    <div className="row" >
                        <div className="col-md-7" >
                            <div className="form-group">
                                <input type="text" className="form-control" id="txt_activity_name" placeholder="Activity Name"  value={this.state.activityName} onChange={(evt)=>this.activityNameChanged(evt)}  />
                            </div>
                        </div>
                        <div className="col-md-4" >
                            <input type="button" value="Create Activity" disabled={this.state.activityName==""} className="btn btn-primary" onClick={()=>this.createActivity()}  />
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-12" >
                            <ActivityListPage/>
                        </div>
                    </div>
                </div>)
    }
}

export default connect(null,{createActivity})(CreateActivityPage);