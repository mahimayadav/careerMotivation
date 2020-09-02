import React from "react";
import { NavLink } from "react-router-dom";
import PopoverNavBar from "./Popover/PopoverNavBar";

const NavBar = () => {
    
    return (
        <>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <NavLink className="navbar-brand" to="#">CareerMotivations</NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" aria-current="page" to="/">HOME</NavLink>
                                </li>
                                <li className="nav-item">
                                    <PopoverNavBar />
                                </li>
                                </ul>
                            </div>
                        </nav>
        </>
        
    );
    
};

export default NavBar;