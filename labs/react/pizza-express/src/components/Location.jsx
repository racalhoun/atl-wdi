import React, {Component} from 'react'
import LocationList from './LocationList'

class Location extends Component {
render(){
    return(
        <div id='locations'>
            <h1>Locations : </h1>
                
               <div> {this.props.name}</div>
               <div> Address :{this.props.address}</div>
               <div> Phone :{this.props.phone}</div>
               </div>
            
    )
}
}
export default Location;