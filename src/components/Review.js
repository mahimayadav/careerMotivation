import React from "react";
import Card from "./ReviewCard";
import Data from "../Demo/reviewdata";

const Review = () => {
    return (
        <>
            <div className="container-fluid my-5 md-5">
                <div className='row '>
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                           {
                               Data.map((val,index)=>{
                                   return <Card 
                                    key={index}
                                    review={val.review}
                                    name={val.name}
                                   />
                               })
                           }
                 
                        </div>
                    </div>
                    <div className="my-5 mr-5" >
                    <svg class="bi bi-chevron-right" width="65" height="65" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg>
                    </div>
                 
                </div>
            </div>
                    
        </>
    );
};

export default Review;