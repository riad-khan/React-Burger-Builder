import React from "react";
import Ingredients from '../ingredients/ingredients';

const Burger = props =>{
    return(
        <div>
            <Ingredients type="top-bread" />
            <Ingredients type="cheese"/>
            <Ingredients type="meat"/>
            <Ingredients type="salad"/>
            <Ingredients type="meat"/>
            <Ingredients type="bottom-bread"/>
            
        </div>
    )
}

export default Burger;