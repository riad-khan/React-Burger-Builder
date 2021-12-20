import React, {Component} from "react";
import Burger from "./burger";
import IngredientsControl from "../control/ingredientsControl";
import { Modal, ModalBody,ModalHeader,ModalFooter, Button } from "reactstrap";
import Summary from "../orderSummary/orderSummary";
import { connect } from "react-redux";
import {addIngredients, removeIngredients,updatePurchaseAble} from '../../redux/actionCreators'


    const mapStatetoProps = state =>{
        return{
            ingredients : state.ingredients,
            totalPrice : state.totalPrice,
            purchaseAble : state.purchaseAble,
        }
    }

    const mapDispatchToProps = dispatch =>{
        return{
            addIngredients : igtype => dispatch(addIngredients(igtype)),
            removeIngredients : igtype => dispatch(removeIngredients(igtype)),
            updatePurchaseAble :() =>dispatch(updatePurchaseAble())
        }
    }

 class BurgerBuilder extends Component {
    
    state = {
        modalOpen : false,
      
    }
   

    checkOutRoute =() =>{
        this.props.history.push('/checkout')
    }

    toggleModal = () =>{
        this.setState({
            modalOpen : !this.state.modalOpen
        })
    }
    addIngredients = type =>{
        this.props.addIngredients(type);
        this.props.updatePurchaseAble();
    }

    removeIngredients = type =>{
            this.props.removeIngredients(type)
          this.props.updatePurchaseAble();

    }
    render(){
        return(
            <div className="container">
                <div className="d-flex flex-md-row flex-column">
                <Burger ingredients={this.props.ingredients} />
                <IngredientsControl 
                addIngredients = {this.addIngredients}
                 price={this.props.totalPrice} 
                 removeIngredients = {this.removeIngredients}
                 toggleModal ={this.toggleModal}
                 purchaseAble = {this.props.purchaseAble} />
            </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Order Summary</ModalHeader>
                    <ModalBody>
                        <Summary totalIngredients = {this.props.ingredients}  />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.checkOutRoute} >Procced to checkout</Button>
                        <Button color="danger" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
};

export default connect(mapStatetoProps,mapDispatchToProps) (BurgerBuilder)