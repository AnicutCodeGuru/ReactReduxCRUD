import React, { Component }  from 'react';
import PropTypes from 'prop-types'
import {connect}  from "react-redux";
import {fetchRecordedActivityList} from "../../actions";

class RecordedActivityListPage extends Component{
    componentDidMount(){
        this.props.fetchRecordedActivityList();
    }
    render(){
        let tableList = this.props.recordedActivityList.length>0? this.props.recordedActivityList.map((recordedActivity,index)=>{
                return (<tr key={recordedActivity._id}>
                            <td>{index+1}</td>
                            <td >{recordedActivity.activityName}</td>
                        </tr>) 
        }) :(<tr>
                <td colSpan="2" className="danger text-center" ><strong>No Data Exists</strong></td>
            </tr>) ;
        return(<div>
                    <table className="table table-bordered table-striped table-hover" >
                        <thead>
                            <tr className="info"  >
                                <th colSpan="2"  >
                                    Recorded Activities List
                                </th>
                            </tr>
                            <tr >
                                <th> Sl. No. </th>
                                <th> Recorded Activity Name </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableList}  
                        </tbody>
                    </table>
                </div>)
    }
}

RecordedActivityListPage.propTypes={
    recordedActivityList:PropTypes.array.isRequired,
    fetchRecordedActivityList:PropTypes.func.isRequired
}

function mapSatesToProps(state){
   return {
    recordedActivityList :state.recordedActivityList,
   }
}

export default connect(mapSatesToProps,{fetchRecordedActivityList})(RecordedActivityListPage);