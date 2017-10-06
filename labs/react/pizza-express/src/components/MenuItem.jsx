import React, {Component} from 'react'
import MenuList from './MenuList'
import pizzaData from '../pizzaData'
class MenuItem extends Component{
    render(){
      return(
        
             
            <div className='menu-item'>   
                <img src={this.props.img} />
                <div className='menu-description'>
                    <div className='menu-item-name'>{this.props.name}</div>
                    <div className='menu-price'><strong>Price:${this.props.price}</strong></div>
                    {this.props.description}  
                </div>
            </div>
      )
    }

    
}
export default MenuItem;
