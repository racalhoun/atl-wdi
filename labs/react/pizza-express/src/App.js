import React, { Component } from 'react'
import Navbar from './components/Navbar.jsx'
import './index.css'
import Splashimage from './components/Splashimage.jsx'
import Description from './components/Description'
import MenuList from './components/MenuList.jsx'
import MenuItem from './components/MenuItem.jsx'
import Location from './components/Location.jsx'
import LocationList from './components/LocationList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1></h1>
        <Navbar/>
        <Splashimage/>
        
        <Description/>
        
      
        <MenuList/> 
        <MenuItem/>
        <Location/>
        <locationList/>
      </div>
    );
  }
}

export default App;
