import React from "react";

const Summary = props =>{

    const orderSummary = props.totalIngredients.map(item =>{
        return(
            <li style={{listStyle:"none"}} key={item.type}>
                <span  style={{fontWeight:"bold",textTransform: "capitalize",marginLeft:"70px"}}>{item.type}</span>  : 
                 <span style={{fontWeight:"bold",marginLeft:"20px"}} >{item.amount}</span>
            </li>
        )
    })
    return(
        <div>
            <ul>
                <h5 className="text-center">Burger Addons</h5>
               {orderSummary}
            </ul>
        </div>
    )
}
export default Summary;