import React, { Component }  from 'react';
import {connect}  from "react-redux";
import {MenuListReducer}   from "../reducer/";
import { Link } from 'react-router-dom' ;
import {bindActionCreators} from 'redux';
import {setActiveMenu}  from "../actions";

class MenuList extends Component{
       menuCLicked(evt){
           var activeLabel = evt.target.href.split("/");
           activeLabel= activeLabel[activeLabel.length-1];
           
           var activeMenu=this.props.menuDetl.MenuList.find(function(menu){
                if(menu.value ==activeLabel ){
                    return true 
                }else{
                    return false;
                }
           })
          this.props.setActiveMenu({payLoad:activeMenu,action:"SET_ACTIVE_MENU"})
       }
       render(){

        let menuItems = this.props.menuDetl.MenuList.map((element) => {
             return   <Link key={element.value} to={"/" +element.value} className={"list-group-item " + (this.props.menuDetl.activeMenu.value == element.value ? " active " :"  ")}   onClick={(evt)=>this.menuCLicked(evt)}  >
                  {element.label }
             
             </Link> 
        });
        return(menuItems)
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({setActiveMenu: setActiveMenu}, dispatch);
}

function mapSatesToProps(state){
   return {
        menuDetl :state.menuDetl,
   }
}
export default connect(mapSatesToProps,matchDispatchToProps)(MenuList);