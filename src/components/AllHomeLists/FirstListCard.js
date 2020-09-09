import React from "react";
import { NavLink } from "react-router-dom";

const FirstListCard = (props) => {
    return (
        <>
            <div className="col-sm-2 col-10 mx-auto">
                <div class="card text-center shadow">
                    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                    <div class="card-body">
                        <NavLink to={props.link} className="nav-link" aria-current="page">{props.title}</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FirstListCard;