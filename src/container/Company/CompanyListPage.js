import React, { Component }  from 'react';
import PropTypes from 'prop-types'
import {connect}  from "react-redux";
import {fetchCompanyList} from "../../actions";

class CompanyListPage extends Component{
    componentDidMount(){
        this.props.fetchCompanyList();
    }
    render(){
        let tableList = this.props.companyList.length>0? this.props.companyList.map((company,index)=>{
                return (<tr key={company._id}>
                            <td>{index+1}</td>
                            <td >{company.companyName}</td>
                        </tr>) 
        }) :(<tr>
                <td colSpan="2" className="danger text-center" ><strong>No Data Exists</strong></td>
            </tr>) ;
        return(<div>
                <table className="table table-bordered table-striped table-hover" >
                    <thead>
                        <tr className="info"  >
                            <th colSpan="2"  >
                                Company List
                            </th>
                        </tr>
                        <tr >
                            <th> Sl. No. </th>
                            <th> Company Name </th>
                        </tr>
                    </thead>
                    <tbody>
                         {tableList}  
                    </tbody>
                </table>
                </div>)
    }
}

CompanyListPage.propTypes={
    companyList:PropTypes.array.isRequired,
    fetchCompanyList:PropTypes.func.isRequired
}

function mapSatesToProps(state){
   return {
    companyList :state.companyList,
   }
}

export default connect(mapSatesToProps,{fetchCompanyList})(CompanyListPage);