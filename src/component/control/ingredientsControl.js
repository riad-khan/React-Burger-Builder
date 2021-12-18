import React from "react";
import {Card,CardBody,CardFooter,Button,CardHeader } from "reactstrap";

const ingredientsData = [
    {label : 'salad', type: 'salad'},
    {label : 'meat ', type: 'meat'},
    {label : 'cheese', type: 'cheese'},
];

const IngredientsBuilder = props =>{
    return(
        <div className="d-flex">
           <div className="container mr-auto ml-1" style={{fontWeight:'bold',fontSize:'1.2rem'}}> {props.label}</div>
            <Button className="btn btn-danger  btn-sm m-1" onClick={props.remove}>Less</Button>
            <Button className="btn btn-success btn-sm  m-1"onClick={props.added} >More</Button>
        </div>
    )
}

const IngredientsControl = props =>{
    return(
        <div className="container ml-md-5" style={{textAlign : 'center'}} >
              <Card style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center"
            }}>
                <CardHeader style={{
                    backgroundColor: "#D70F64",
                    color: "white"
                }}><h4>Add Ingredients</h4></CardHeader>
                <CardBody>
                    {ingredientsData.map(item =>{
                        return <IngredientsBuilder remove = {()=> props.removeIngredients(item.type)} added={() =>props.addIngredients(item.type)} label={item.label} type={item.type} key={Math.random()} />
                    })}
                </CardBody>
                <CardFooter>
                    <h5>Price : {props.price} BDT</h5>
                </CardFooter>
            </Card>
        </div>
    )
}

export default IngredientsControl;