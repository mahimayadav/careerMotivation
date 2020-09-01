import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
        
                        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" aria-current="page" to="/colleges">TOP COLLEGES</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/courses">COURSES</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/review">REVIEW</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/videos">VIDEOS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/review">WRITE A REVIEW</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/queans">ASK QUES/ANS</NavLink>
                                </li>

                                </ul>
                                <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/login"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                      </svg>  LOGIN</NavLink>
                                </li>
                                    </ul>
                               
                            </div>
                        </nav>
                    {/* </div>
                </div>
            </div> */}
        </>
    );
};

export default Header;