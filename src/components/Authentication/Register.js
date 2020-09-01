import React from "react";
import web from "../../images/bg.jpg";
import { NavLink } from "react-router-dom";

const Register = () => {
    
        return (
          <>
            <div className="login-body">   
                <section className="Form my-5">
                    <div className="container">
                        <div className='row no-gutters'>
                            <div className="col-lg-5">
                                <img src={web} className="img-fluid" alt="web" />
                            </div>
                            <div className="col-lg-7 px-5 py-5">
                                <h1 className="font-weight-bold py-3">Sign Up </h1>
                                <form>
                                <div className="form-row">
                                        <div className="col-lg-7">
                                            <input type="name" placeholder="enter a full name" className="form-control my-2 p-4" />
                                        </div>
                                    </div>
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
                                            <input type="cpassword" placeholder="enter a confirm password" className="form-control my-2 p-4" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-lg-7">
                                            <button type="button" className="btn1 mt-3 mb-5" >Sign up</button>
                                        </div>
                                    </div>

                                    <div className="form-row justify-align-center">
                                        <div className="col-lg-3">
                                            <button type="button" className="btn2 mt-3 mb-3" >facebook</button>
                                        </div>
                                        <div className="col-lg-4">
                                            <button type="button" className="btn3 mt-3 mb-3" >Google +</button>
                                        </div>
                                    </div>

                                    <p>Already A Member?<NavLink to="/login">   Sign in</NavLink>   it's Easy.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                        
                </section>
            </div>
        </>

        );
};

export default Register;