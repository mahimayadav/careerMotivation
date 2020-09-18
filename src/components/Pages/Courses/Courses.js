import React from "react";
import web from "../../../images/courses1.jpg";
import SearchBar from "../../SearchBar";

const Courses = () => {
    
        return (
            <>
            <SearchBar className="search-bar" />
             <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={web} class="d-block w-100" alt="web" />
                    <div className="carousel-caption d-md-block">
                        <h1>You can find all the Courses here</h1>
                    </div>
                    </div>
                </div>
        </div>
        <div className="container-fluid">
                    <div className='row'>
           <div className="text-center my-5">
                  <h1 className="display-5">CHOOSE BY YOUR LEVEL</h1>
                  <hr className="w-25 mx-auto" />
                </div>
            </div>
          </div>
          </>

        );
};

export default Courses;