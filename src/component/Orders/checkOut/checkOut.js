import React,{Component} from "react";
import {Button} from "reactstrap";

class Checkout extends Component {
    state ={
        values : {
            name : '',
            email : '',
            address : '',
            Payment: 'Cash On Delivary',

        }
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
        console.log(this.state.values)
    }
    goBack = (e) =>{
        this.props.history.goBack("/");
    }
    render() {
        return(
            <div className="container">
               <div className="col-md-6">
                   <form style={{
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


                   </form>
               </div>
            </div>
        )
    }
}

export default Checkout
