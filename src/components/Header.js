import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            {/* <div className="container-fluid nav_bg">
                <div className='row'>
                    <div className="col-12 mx-auto"> */}
                        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" aria-current="page" to="/">Top Colleges</NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li> */}
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/engineering">Courses</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/medical">Review</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/management">Videos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/service">Write a Review</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/service">Ask Ques/Ans</NavLink>
                                </li>
                                
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li> */}
                                </ul>
                                {/* <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="#">Login</NavLink>
                                </li>
                                    </ul> */}
                                {/* <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form> */}
                            </div>
                        </nav>
                    {/* </div>
                </div>
            </div> */}
        </>
    );
};

export default Header;