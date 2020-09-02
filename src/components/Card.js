import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="col-md-3 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                    <NavLink to={props.link} className="nav-link" aria-current="page">{props.title}</NavLink>
                        {/* <h5 className="card-title font-weight-bold">{props.title}</h5> */}
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                </div>
            </div>                
        </>
    );
};

export default Card;