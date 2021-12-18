import React from "react";
import Ingredients from '../ingredients/ingredients';
import './Burger/burger.css'

const Burger = props =>{
    let ingredientsArray = props.ingredients.map(item =>{
            let amountArray = [...Array(item.amount).keys()];
          return amountArray.map(_ =>{
                return <Ingredients type={item.type} key={Math.random()} />
            })
    })
    .reduce((array, element) =>{
        return array.concat(element)
    }, [])

   if(ingredientsArray.length === 0){
       ingredientsArray = <h5 className="text-center"> Please Add Some Ingredients</h5>
   }
    
    return(
        <div>
            <Ingredients type="top-bread" />
               {ingredientsArray}
            <Ingredients type="bottom-bread"/>
            
        </div>
    )
}

export default Burger;