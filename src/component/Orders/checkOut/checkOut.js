import React,{Component} from "react";
import {Button} from "reactstrap";
import {connect} from "react-redux";
import Summary from "../../orderSummary/orderSummary";
import axios from "axios";
import Spinner from "../../spinner/spinner";
import {ModalBody , Modal} from "reactstrap";
import { resetIngredients } from '../../../redux/actionCreators'

const mapStateToProps = state =>{
    return{
        ingredients :state.ingredients,
        totalPrice : state.totalPrice,
        purchaseAble: state.purchaseAble,
    }

}

const mapDispatchToProps = dispatch =>{
    return{
        resetIngredients : () =>dispatch(resetIngredients())
    }
}

class Checkout extends Component {
    state ={
        values : {
            name : '',
            email : '',
            address : '',
            Payment: 'Cash On Delivary',


        },
        isLoading : false ,
        isModalOpen: false,
        modalMsg : "",

    }



    handleInputChange = (e) =>{
        this.setState({
           values:{
               ...this.state.values,
               [e.target.name] : e.target.value
           }
        })
    }
    handleSubmit = (e) =>{
        this.setState({
            isLoading : true,
        })
       const orders = {
           ingredients: this.props.ingredients,
           customerInfo : this.state.values,
           totalPrice: this.props.totalPrice,
           orderTime : new Date(),
       }
       axios.post('https://burger-builder-ac189-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',orders)
           .then(response =>{
               if(response.status === 200 ){
                   this.setState({
                       isLoading : false,
                       isModalOpen : true,
                       modalMsg : "Order Placed Successfully"

                   })
                   this.props.resetIngredients() ;
               }else{
                   this.setState({
                       isLoading : false,
                       isModalOpen : true,
                       modalMsg : "Something Went Wrong! please order again",
                   })
               }
           })
           .catch(error => {
               this.setState({
                   isLoading : false,
                   isModalOpen : true,
                   modalMsg : error.message
               })
           })

    }
    goBack = (e) =>{
        this.props.history.goBack("/");
    }
    render() {
        let form = (<form style={{
            border: "1px solid gray",
            padding: "20px",
            boxShadow : "1px 1px #888888",
            borderRadius : "5px"

        }}>
            <h4> Checkout Form</h4>
            <div className="form-group">
                <label htmlFor ="name" className="mb-2" ><span>Name</span></label>
                <input type="text" className="form-control" onChange={this.handleInputChange}  value={this.state.values.name} name="name" placeholder=" type your name"/>
            </div>
            <div className="form-group">
                <label htmlFor="name" className="mb-2"><span>email Address</span></label>
                <input type="email" className="form-control" name="email" onChange={this.handleInputChange}  value={this.state.values.email} placeholder="type your email"/>
            </div>

            <div className="form-group">
                <label htmlFor="name" className="mb-2"><span>Home Address</span></label>
                <input type="text" className="form-control" name="address" onChange={this.handleInputChange}  value={this.state.values.address} placeholder="type your address"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1" className="mb-2">payment Method</label>
                <select className="form-control" id="exampleFormControlSelect1" onChange={this.handleInputChange} name="Payment"  value={this.state.values.Payment}>
                    <option value="Cash On Delivary">Cash On Delivary</option>
                    <option value="Bkash">Bkash</option>
                </select>
            </div>
            <br />
            <Button className="ms-auto m-2" onClick={this.handleSubmit} > Checkout Now </Button>
            <Button className="float-right" color="danger" onClick={this.goBack}> Cancel </Button>


        </form>)
        return(
            <div className="container">
             <div className="row">
                 <div className="col-md-8">
                     {this.state.isLoading ? <Spinner/> : form}
                 </div>

                 <div className="col-md-4 mr-auto">
                     <div className="card border-dark mb-3" >
                         <h4 className="card-header bg-transparent border-success">Order Summary</h4>
                         <div className="card-body">
                             <Summary totalIngredients = {this.props.ingredients}/>
                             <Modal isOpen={this.state.isModalOpen} onClick={this.goBack} >
                                 <ModalBody> <p>{this.state.modalMsg}</p></ModalBody>
                             </Modal>

                         </div>
                         <h4 className="card-footer bg-transparent border-success">Total price : <span>{this.props.totalPrice} BDT</span></h4>
                     </div>
                 </div>
             </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Checkout)
