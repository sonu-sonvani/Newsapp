
import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  
  Route,

} from "react-router-dom";


export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      
   <div>
    <Router>
    <LoadingBar
        color='#f11946'
        progress={this.state.progress}
    
      />
    <Navbar/>
//         this is navbar
    {/* <News  category="general"/> */}
    <Routes>
          {/* <Route path="/" key="general"><News  category="general"/></Route> */}
          <Route exact path="/"  element={< News setProgress={this.setProgress} key="general" category="general"/>} ></Route>
          <Route exact path="/business" element={< News setProgress={this.setProgress} key="business" category="business"/>} ></Route>
          <Route exact path="/entertainment" element={< News setProgress={this.setProgress}key="entertainment" category="entertainment"/>} ></Route>
          <Route exact path="/health" element={< News setProgress={this.setProgress} category="health"/>} ></Route>
          <Route exact path="/science" element={< News setProgress={this.setProgress} category="science"/>} ></Route>
          <Route exact path="/sports" element={< News setProgress={this.setProgress}  key ="sports" category="sports"/>} ></Route>
          <Route exact path="/technology" element={< News setProgress={this.setProgress} category="technology"/>} ></Route>
      
          
        </Routes>

    </Router>
  
   </div>
    )
  }
}



