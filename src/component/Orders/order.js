import React from "react";

const Order = props =>{
    console.log(props.order)
    let ingredients = props.order.ingredients.map(item =>{
        return (
            <span style={{
            border: "1px solid grey",
                borderRadius: "5px",
                padding: "5px",
                marginRight: "10px",
        }} key={item.type}>{item.amount}x <span style={{ textTransform: "capitalize" }}>{item.type}</span></span>
        )
    })
    return(
       <div className="container">

           <div>

               <div style={{
                   border: "1px solid grey",
                   boxShadow: "1px 1px #888888",
                   borderRadius: "5px",
                   padding: "20px",
                   marginBottom: "10px",
               }}>
                   <p>Order Number: {props.order.id}</p>
                   <p>Customer Name: {props.order.customerInfo.name}</p>
                   <p>Delivery Address: {props.order.customerInfo.address}</p>
                   <hr />
                   {ingredients}
                   <hr />
                   <p>Total: {props.order.totalPrice} BDT</p>
               </div>
           </div>
       </div>
    )
}

export default Order