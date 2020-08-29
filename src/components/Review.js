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
                </div>
            </div>
                    
        </>
    );
};

export default Review;