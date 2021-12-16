import React from "react";
import Header from "./header/header";
import BurgerBuilder from "./BurgerBuilder/burgerBuilder";

const mainComponent = props =>{
    return(
        <div>
            <Header />
            <div className="container">
              <BurgerBuilder />
            </div>
        </div>
    )
}

export default mainComponent;