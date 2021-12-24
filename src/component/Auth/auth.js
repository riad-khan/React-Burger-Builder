import React ,{Component} from "react";
import { Formik ,ErrorMessage } from 'formik'
import {connect} from "react-redux";
import {auth, authLoading} from '../../redux/Auth/authActionCreators';
import Spinner from "../spinner/spinner";
import '../spinner/spinner.css';
import {Alert} from "reactstrap";


const mapStateToProps = state =>{
    return{
        authLoading: state.authLoading,
        authErrMsg: state.authErrMsg,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        auth : (email,password,mode) =>dispatch(auth(email,password,mode)),
    }
}

class Auth extends Component{
    state ={
        mode: "sign-up",
    }

    switchForm = () =>{
        this.setState({
            mode : this.state.mode === "sign-up" ? 'login' : 'sign-up'
        })
    }
    render() {
        let error = null;
            if(this.props.authErrMsg !== null){
                error = (
                    <Alert color ="danger">{this.props.authErrMsg}</Alert>
                )
        }
            let form = null;
        if(this.props.authLoading === true){
           form = (<Spinner/>)
        }else{
            form =(
                <div className="col-lg-6">
                    {error}
                    <h3 className="mb-4">{this.state.mode === 'sign-up' ? "Sign up" : "login"}</h3>

                    <Formik initialValues={
                        {
                            email:'',
                            password: '',
                            passwordConfirm: ''
                        }
                    }
                            onSubmit={(values) =>{
                                this.props.auth(values.email,values.password,this.state.mode);
                            }}
                            validate={(values) =>{
                                const errors = {};

                                if (!values.email) {
                                    errors.email = 'Email Required';
                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                                    errors.email = 'Invalid email address';
                                }
                                if(!values.password){
                                    errors.password ='Password Required'
                                }else if( values.password < 6){
                                    errors.password ='password should be 6 digits long'
                                }

                                if(this.state.mode === "sign-up"){
                                    if(!values.passwordConfirm){
                                        errors.passwordConfirm="Confirm password required"
                                    }else if(values.password !== values.passwordConfirm){
                                        errors.passwordConfirm = 'Password Does not matched'
                                    }
                                }


                                //...

                                return errors;
                            }}

                    >
                        { ({values,handleSubmit,handleChange,errors,touched}) => (

                            <form onSubmit={handleSubmit}>
                                {errors.email && <div id="feedback" className="text-danger">{errors.email}</div>}
                                <input className="form-control" placeholder="Type your email" name="email" value={values.email} onChange={handleChange} /> <br />
                                {errors.password && <div id="feedback" className="text-danger">{errors.password}</div>}
                                <input type="password" placeholder="Type your password" className="form-control" name="password" value={values.password} onChange={handleChange} /> <br />
                                {this.state.mode === 'sign-up' ? <div>
                                    {errors.passwordConfirm && <div id="feedback" className="text-danger">{errors.passwordConfirm}</div>}
                                    <input type="password" placeholder="Type Confirm password"
                                           className="form-control" name="passwordConfirm"
                                           value={values.passwordConfirm} onChange={handleChange} /> <br />
                                </div> : null}
                                <button type="submit" className="btn btn-lg" style={{
                                    backgroundColor: "#d70f64",
                                    width: "100%",
                                    color:"white",
                                }}>{this.state.mode === "sign-up"? "Sign up" : "Login Now"}</button>


                            </form>
                        )}
                    </Formik>
                    <a href="#" onClick={this.switchForm} className="float-end mt-3 text-decoration-none" style={{fontSize :'20px',color:'#d70f64'}}>{this.state.mode === "sign-up"? "Login Here" : "Sign up"}</a>

                </div>

            )
        }

        return(
            <div className="container">
               <div className="row justify-content-center">

                   {form}
               </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Auth) ;