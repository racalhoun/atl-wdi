import React, {Component} from 'react'
import locationData from '../locationData.js'
import Location from './Location.jsx'
class LocationList extends Component{
    render(){
        <div id='locations'>Locations :</div>
        const locationComponent = locationData.map(location =>{
            return(
                <Location
                name={location.name}
                address={location.address}
                phone={location.phone}
                />
            )
        })
        return<div>{locationComponent}</div>
    }

}
export default LocationList;