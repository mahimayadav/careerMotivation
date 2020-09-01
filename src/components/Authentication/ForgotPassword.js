import React from "react";
import web from "../../images/bg.jpg";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
    
        return (
          <>
          <div className="login-body">
            <section className="Form ">
                <div className="container">
                    <div className='row no-gutters'>
                        <div className="col-lg-5 py-5">
                            <img src={web} className="img-fluid" alt="web" />
                        </div>
                        <div className="col-lg-7 px-5 bg  py-5 my-5">
                            <h1 className="font-weight-bold py-3"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                      </svg> Forgot Password</h1>
                            
                            <form>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input type="email" placeholder="enter a email or phone" className="form-control my-2 p-4" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <button type="button" className="btn1 mt-3 mb-5" >submit</button>
                                    </div>
                                </div>
                                <NavLink to="/register">  Sign Up</NavLink>
                                  or<NavLink to="/login">  Sign in</NavLink>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        
          </>

        );
};

export default ForgotPassword;