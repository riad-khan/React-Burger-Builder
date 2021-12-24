import React,{Component} from "react";
import Header from "./header/header";
import BurgerBuilder from "./BurgerBuilder/burgerBuilder";
import { Route,Switch,Redirect } from "react-router-dom";
import Orders from './Orders/Orders';
import Checkout from "./Orders/checkOut/checkOut";
import Auth from "./Auth/auth";
import {connect} from "react-redux";
import {authCheck} from '../redux/Auth/authActionCreators';
import Logout from './Auth/logout';

const mapStateToProps = state =>{
    return{
        token : state.token
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        authCheck : () => dispatch(authCheck())
    }
}
class mainComponent extends Component{
    componentDidMount() {
       this.props.authCheck();
    }

    render() {
            let routes ={};
            if(this.props.token === null) {
                routes= (
                    <Switch>
                        <Route path="/login"  component={Auth} />
                        <Redirect to="/login" />
                    </Switch>
                )
            }else{
                routes =(
                    <Switch>
                        <Route path="/" exact component={BurgerBuilder} />
                        <Route path="/orders"  component={Orders} />
                        <Route path="/logout"  component={Logout} />
                        <Route path="/checkout" component={Checkout} />
                        <Redirect to="/" />
                    </Switch>
                )
            }
            return(
                <div>
                    <Header />
                    {routes}
                </div>
            )
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(mainComponent);