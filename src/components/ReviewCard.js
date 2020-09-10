import React from "react";

const ReviewCard = (props) => {
    return (
        <>
            <div className="col-xl-4 col-10 mx-auto">
                <div className="card image">
                    <div className="row md-5 mr-5">
                        <div className="col-2">
                            <img src={props.img} className="card-img-top-left" height="20px"alt={props.img} />
                        </div>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>{props.review}</p>
                            <footer className="blockquote-footer">{props.name}</footer>
                        </blockquote>
                    </div>
                </div>
            </div>                
           
        </>
    );
};

export default ReviewCard;