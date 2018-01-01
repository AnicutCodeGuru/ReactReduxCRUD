import React, { Component }  from 'react';
import PropTypes from 'prop-types'
import {connect}  from "react-redux";
import {fetchActivityList} from "../../actions";

class ActivityListPage extends Component{
    componentDidMount(){
        this.props.fetchActivityList();
    }
    render(){
        let tableList = this.props.activityList.length>0? this.props.activityList.map((activity,index)=>{
                return (<tr key={activity._id}>
                            <td>{index+1}</td>
                            <td >{activity.activityName}</td>
                        </tr>) 
        }) :(<tr>
                <td colSpan="2" className="danger text-center" ><strong>No Data Exists</strong></td>
            </tr>) ;
        return(<div>
                    <table className="table table-bordered table-striped table-hover" >
                        <thead>
                            <tr className="info"  >
                                <th colSpan="2"  >
                                    Activities List
                                </th>
                            </tr>
                            <tr >
                                <th> Sl. No. </th>
                                <th> Activity Name </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableList}  
                        </tbody>
                    </table>
                </div>)
    }
}

ActivityListPage.propTypes={
    activityList:PropTypes.array.isRequired,
    fetchActivityList:PropTypes.func.isRequired
}

function mapSatesToProps(state){
   return {
    activityList :state.activityList,
   }
}

export default connect(mapSatesToProps,{fetchActivityList})(ActivityListPage);