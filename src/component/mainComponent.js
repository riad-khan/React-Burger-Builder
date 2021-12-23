import React from "react";
import Header from "./header/header";
import BurgerBuilder from "./BurgerBuilder/burgerBuilder";
import { Route,Switch } from "react-router-dom";
import Orders from './Orders/Orders';
import Checkout from "./Orders/checkOut/checkOut";
import Auth from "./Auth/auth";


const mainComponent = props =>{
    return(
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={BurgerBuilder} />
                <Route path="/orders"  component={Orders} />
                <Route path="/login"  component={Auth} />
                <Route path="/checkout" component={Checkout} />
            </Switch>
        </div>
    )
}

export default mainComponent;