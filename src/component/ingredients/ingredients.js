import React from "react";
import './ingredients.css'
import Bottom from '../../assets/images/bottom.png';
import Meat from '../../assets/images/meat.png';
import Salad from '../../assets/images/salad.png';
import Top from '../../assets/images/top.png';
import Cheese from '../../assets/images/cheese.png'

const Ingredients = props =>{
    console.log(props);
        let ingredients = null ;
    switch(props.type){
        case 'bottom-bread':
            ingredients = <div><img src={Bottom} alt="bottom-bread" /></div>
            break
        case 'top-bread':
            ingredients = <div><img src={Top}  alt="top-bread"/></div>
            break;
         case 'meat':
             ingredients = <div><img src={Meat}  alt="meat"/></div>
             break;
         case 'salad':
            ingredients = <div><img src={Salad}  alt="Salad"/></div>
            break;
         case 'cheese':
             ingredients = <div><img src={Cheese}  alt="top-bread"/></div>
             break;
            default:
                ingredients = null

    }

    return(
        <div className="ingredients">
            {ingredients}
        </div>
    )
}

export default Ingredients;