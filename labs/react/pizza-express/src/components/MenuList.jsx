import React, {Component} from 'react'
import pizzaData from '../pizzaData.js'
import MenuItem from './MenuItem.jsx'
class MenuList extends Component {
    render(){
        return(
            <div className='menu-container'>
                <h1 className='menu'>Menu</h1>
                {pizzaData.map((pizza, index) =>{
                    return(
                        <MenuItem 
                        key={index}
                        name={pizza.name}
                        price={pizza.price}
                        description={pizza.description}
                        img={pizza.image}
                        />
                    )
                
                })}
            </div>
        );
    }
}
export default MenuList;
