import React from "react";
import Card from "../Card";
import Data from "../../api/Lists";


const List = () => {
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
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    link={val.link}
                                   />
                               })
                           }
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-12 text-center my-5" >
               <button type="button" className="btn btn-outline-info" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                   Check More</button> 
            </div>
                    
        </>
    );
};

export default List;