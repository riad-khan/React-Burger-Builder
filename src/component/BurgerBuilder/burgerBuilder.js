import React, {Component} from "react";
import Burger from "./burger";
import IngredientsControl from "../control/ingredientsControl";
import { Modal, ModalBody,ModalHeader,ModalFooter,Buttom, Button } from "reactstrap";
import Summary from "../orderSummary/orderSummary";

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
        modalOpen : false,
        purchaseAble : false ,
           
       
    }
    updatePurchaseAble = ingredients =>{
        let sum = 0
        for(let item of ingredients){
            sum =  sum + item.amount  
        }
        this.setState({
            purchaseAble : sum > 0
        })
    }

    toggleModal = () =>{
        this.setState({
            modalOpen : !this.state.modalOpen
        })
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

        this.updatePurchaseAble(ingredients)

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

        this.updatePurchaseAble(ingredients)

    }
    render(){
        return(
            <div>
                <div className="d-flex flex-md-row flex-column">
                <Burger ingredients={this.state.ingredients} />
                <IngredientsControl 
                addIngredients = {this.addIngredients}
                 price={this.state.totalPrice} 
                 removeIngredients = {this.removeIngredients}
                 toggleModal ={this.toggleModal}
                 purchaseAble = {this.state.purchaseAble} />
            </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Order Summary</ModalHeader>
                    <ModalBody>
                        <Summary totalIngredients = {this.state.ingredients}  />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.toggleModal}>Procced to checkout</Button>
                        <Button color="danger" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}