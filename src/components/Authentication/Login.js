import React from "react";
import web from "../../images/bg.jpg";
import { NavLink } from "react-router-dom";

const Login = () => {
    
        return (
          <>
          <div className="login-body">
            <section className="Form">
                <div className="container ">
                    <div className='row no-gutters'>
                        <div className="col-lg-5 py-5">
                            <img src={web} className="img-fluid" alt="web" />
                        </div>
                        <div className="col-lg-7 px-5 bg  py-5 my-5">
                            <h1 className="font-weight-bold py-3">Login</h1>
                            <h4>Sign into your account</h4>
                            <form>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input type="email" placeholder="enter a email" className="form-control my-2 p-4" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input type="password" placeholder="enter a password" className="form-control my-2 p-4" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <button type="button" className="btn1 mt-3 mb-5" >submit</button>
                                    </div>
                                </div>
                                <NavLink to="/forgotpassword">Forgot password</NavLink>
                                <p>Don't have an account?<NavLink to="/register">Sign Up</NavLink></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            </div> 
        
          </>

        );
};

export default Login;