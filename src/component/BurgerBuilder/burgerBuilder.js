import React, {Component} from "react";
import Burger from "./burger";
import IngredientsControl from "../control/ingredientsControl";

const ingredientsPrice = {
    salad : 10,
    meat : 80,
    cheese : 20,
}

export default class BurgerBuilder extends Component {
    state = {
        ingredients :[
            { type: 'meat', amount:0},
            { type: 'salad', amount:0},
            { type: 'cheese', amount:0}
        ],

        totalPrice :40,
           
       
    }

    addIngredients = type =>{
        const ingredients = [...this.state.ingredients];
        const newPrice  = this.state.totalPrice + ingredientsPrice[type]
        for(let item of ingredients){
            if(item.type ===  type) {
                item.amount ++
            }
        }
        this.setState({
            ingredients : ingredients,
            totalPrice : newPrice
        })

    }

    removeIngredients = type =>{
        const ingredients = [...this.state.ingredients];
        const newPrice  = this.state.totalPrice - ingredientsPrice[type]
        for (let item of ingredients){
            if(item.type === type){
                if(item.amount === 0)return

                item.amount --;

            }
        }
        this.setState({
            ingredients : ingredients,
            totalPrice : newPrice
        })

    }
    render(){
        return(
            <div className="d-flex flex-md-row flex-column">
                <Burger ingredients={this.state.ingredients} />


                <IngredientsControl addIngredients = {this.addIngredients} price={this.state.totalPrice} removeIngredients = {this.removeIngredients} />
            </div>
        )
    }
}