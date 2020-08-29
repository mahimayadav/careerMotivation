import React from "react";

const ReviewCard = (props) => {
    return (
        <>
            <div className="col-xl-4 col-10 mx-auto">
            <div class="card">
             <icon>"</icon>
              <div class="card-body">
               <blockquote class="blockquote mb-0">
                  <p>{props.review}</p>
                  <footer class="blockquote-footer">{props.name}</footer>
              </blockquote>
              </div>
              </div>
            </div>                
        </>
    );
};

export default ReviewCard;