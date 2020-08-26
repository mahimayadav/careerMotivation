import React from "react";
import Card from "./Card";
import Data from "../Demo/dummy";

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Welcome To Sevice</h1>
            </div>
            <div className="container-fluid md-5">
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                           {
                               Data.map((val,index)=>{
                                   return <Card 
                                    key={index}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
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

export default Service;