import * as actionTypes from './actionTypes'
import axios from "axios";

export const addIngredients = igtype =>{
    return{
        type: actionTypes.ADD_INGREDIENTS,
        payload : igtype
    }
}

export const removeIngredients = igtype =>{
    return{
        type : actionTypes.REMOVE_INGREDIENTS,
        payload: igtype
    }
}

export const updatePurchaseAble = ()=>{
    return {
        type : actionTypes.PURCHASEABLE
    }
}

export const resetIngredients = () =>{
    return{
        type:actionTypes.RESET_INGREDIENTS
    }
}

export const orderLoad = orders =>{
    return{
        type: actionTypes.ORDER_LOAD,
        payload : orders
    }
}

export const loadingOrder = () =>{
    return {
        type : actionTypes.LOADING_ORDER
    }
}

export const fetchOrders = () =>dispatch =>{
    axios.get("https://burger-builder-ac189-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json")
        .then(response =>{
             dispatch(orderLoad(response.data))

        })
}