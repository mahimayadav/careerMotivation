import React from "react";
import { NavLink } from "react-router-dom";
import Management from "./Management/Management";
import Medical from "./Medical/Medical";
import Engineering from "./Engineering/Engineering";
import Scientist from "./Scientist/Scientist";
import HotelManagement from "./HotelManagement/HotelManagement";
import Doctoral from "./Doctoral/Dcotoral";
import Finance from "./Finance/Finance";

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
                                    <Engineering />
                                </li>
                        
                                <li className="nav-item">
                                    <Medical />
                                </li>
                                <li className="nav-item">
                                    <Management />
                                </li>
                                <li className="nav-item">
                                    <Scientist />
                                </li>
                                <li className="nav-item">
                                    <HotelManagement />
                                </li>
                                <li className="nav-item">
                                    <Finance />
                                </li>
                                <li className="nav-item">
                                    <Doctoral />
                                </li>
                               
                                {/* <li className="nav-item">
                                 <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                                </li> */}
                                </ul>
                            </div>
                        </nav>
        </>
        
    );
    
};

export default NavBar;