import React, { Component }  from 'react';
import {connect}  from "react-redux";
import Main from "../routes/routes";

class MainPanel extends Component{
       render(){
             return(
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.menuDetl.activeMenu.label}</h3>
                    </div>
                    <div className="panel-body">
                        <Main/>
                    </div>   
                </div>
             )
        }
}

function mapSatesToProps(state){
   return {
        menuDetl :state.menuDetl,
   }
}
export default connect(mapSatesToProps)(MainPanel);