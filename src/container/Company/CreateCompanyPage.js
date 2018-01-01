import React, { Component }  from 'react';
import PropTypes from 'prop-types'
import {connect}  from "react-redux";
import {createCompany} from "../../actions/";
import CompanyListPage from "./CompanyListPage";

class CreateCompanyPage extends Component{
    constructor(){
        super();
        this.state={companyName:""}
    }
    companyNameChanged(evt){
        this.setState({companyName:evt.target.value});
    }
    createCompany(){
        this.props.createCompany(this.state.companyName);
        this.setState({companyName:""});
    }
    render(){
        return(
                <div>
                    <div className="row" >
                        <div className="col-md-7" >
                            <div className="form-group">
                                <input type="text" className="form-control" id="txt_company_name" placeholder="Company Name"  value={this.state.companyName} onChange={(evt)=>this.companyNameChanged(evt)}  />
                            </div>
                        </div>
                        <div className="col-md-4" >
                            <input type="button" value="Create Company" disabled={this.state.companyName==""} className="btn btn-primary" onClick={()=>this.createCompany()}  />
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-12" >
                            <CompanyListPage/>
                        </div>
                    </div>
                </div>)
    }
}
export default connect(null,{createCompany})(CreateCompanyPage);