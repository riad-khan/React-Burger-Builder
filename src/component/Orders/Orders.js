import React , {Component} from "react";
import {fetchOrders } from '../../redux/actionCreators';
import {connect} from "react-redux";
import Order from "./order";
import Spinner from "../spinner/spinner";

const mapStateToProps = state =>{
    return{
        orders: state.orders,
        orderLoading: state.orderLoading,
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        fetchOrders : () => dispatch(fetchOrders()),
    }
}
class Orders extends Component{
    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {

         let order = this.props.orders.map(order =>{
           return <Order order= {order} key={order.id}/>
        })
        return(
            <div className="container">
                <h2 className="text-center">Your orders</h2>
                {this.props.orderLoading ? <Spinner/> : order}
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Orders);