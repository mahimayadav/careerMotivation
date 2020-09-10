import React from "react";
import Card from "./ReviewCard";
import Data from "../api/reviewdata";
import { NavLink } from "react-router-dom";

const Review = () => {
    return (
        <>
            <div className="container-fluid my-5 md-5">
                <div className='row '>
                    <div className="col-10 mx-auto">
                        <div className="row gy-2 mx-5 ml-5">
                       
                           {
                               Data.map((val,index)=>{
                                   return <Card
                                   img={val.img} 
                                    key={index}
                                    review={val.review}
                                    name={val.name}
                                   />
                               })
                           }
               
                        </div>
                        <div className="btn-prev my-5" >
                        <NavLink to="#">
                           
                           <svg width="5em" height="5em" viewBox="0 3 20 16" className="bi bi-chevron-left" fill="grey" xmlns="http://www.w3.org/2000/svg">
                               <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                           </svg>
                        </NavLink>
                        </div>
                        <div className="btn-next my-5" >
                        <NavLink to="#">
                             
                            <svg width="5em" height="5em" viewBox="0 3 20 16" className="bi bi-chevron-right" fill="grey" xmlns="http://www.w3.org/2000/svg">
                            <   path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </NavLink>
                    </div>
                    </div>
                   
                </div>
            </div>
                    
        </>
    );
};

export default Review;