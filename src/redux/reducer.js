import * as actionTypes from './actionTypes';
const ingredientsPrice = {
    salad : 10,
    meat : 80,
    cheese : 20,
}

const InitialState = {
    ingredients :[
        { type: 'meat', amount:0},
        { type: 'salad', amount:0},
        { type: 'cheese', amount:0}
    ],
    orders : [],
    orderLoading : true ,
    orderError : false ,
    totalPrice :40,
    purchaseAble : false ,
}

export const reducer  = (state = InitialState , action)=>{
    const ingredients = [...state.ingredients];
     switch(action.type){
       case actionTypes.ADD_INGREDIENTS :
        for(let item of ingredients){
            if(item.type ===  action.payload) {
                item.amount ++
            }
        }return{
            ...state,
            ingredients : ingredients,
            totalPrice : state.totalPrice + ingredientsPrice[action.payload]
        }
        case actionTypes.REMOVE_INGREDIENTS :
            for (let item of ingredients){
                if(item.type === action.payload){
                    if(item.amount === 0)return state
    
                    item.amount --;
                }
            }
           return{
               ...state,
               ingredients : ingredients,
               totalPrice : state.totalPrice - ingredientsPrice[action.payload]
           }
           case actionTypes.PURCHASEABLE :
            let sum = 0
            for(let item of ingredients){
                sum =  sum + item.amount  
            }
            return{
                ...state,
                purchaseAble: sum >0
            }
         case actionTypes.RESET_INGREDIENTS :
             return{
                 ...state,
                 ingredients :[
                     { type: 'meat', amount:0},
                     { type: 'salad', amount:0},
                     { type: 'cheese', amount:0}
                 ],

                 totalPrice :40,
                 purchaseAble : false ,
             }

         case actionTypes.ORDER_LOAD :
             let orders = [];
             for (let key in action.payload){
                 orders.push({
                     ...action.payload[key],
                     id : key,
                 })
             }

             return {
                 ...state,
                 orders: orders,
                 orderLoading: false,

             }

       
       default:
           return state
   }
}