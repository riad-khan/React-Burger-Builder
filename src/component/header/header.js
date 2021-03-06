import React from "react";
import "./header.css"
import {Navbar,NavbarBrand, Nav, NavItem } from 'reactstrap';
import Logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = state =>{
    return{
        token : state.token,
        userId : state.userId,
    }
}

const Header = props =>{

        let nav = {};
        if(props.token === null) {
            nav = (
                <Nav className="mr-md-5">
                <NavItem>
                    <NavLink to="/login"  className="NavLink">Login</NavLink>
                </NavItem>
                </Nav>

            )
        }else{
            nav = (
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink to="/"  className="NavLink">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/orders"  className="NavLink">Orders</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/logout"  className="NavLink">Logout</NavLink>
                    </NavItem>


                </Nav>
            )
        }

    return(
        <div className="Navigation">
            <Navbar style={{
                backgroundColor: "#D70F64",
                height: "70px",
            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={Logo} alt="Logo" width="80px" />
                </NavbarBrand>
                {nav}
            </Navbar>
        </div>
    )
}

export default connect (mapStateToProps) (Header);