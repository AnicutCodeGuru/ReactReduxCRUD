import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom' 
import Main from "./routes/routes";
import MenuList from "./container/MenuList";
import MainPanel from "./container/MainPanel";

class App extends Component {
  render() {
    return (
      <div>
          <div className="row" >
             <div className="col-md-3" >
                <MenuList/>
             </div>
             <div className="col-md-8" >
               <MainPanel/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
