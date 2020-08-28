import React from "react";
import web from "../images/image.jpg";
import web1 from "../images/image1.jpg"
import web2 from "../images/image2.jpg"
import SearchBar from "./SearchBar";

const Carousel = () => {
    return (
        <>
            <SearchBar />
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1" ></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={web} class="d-block w-100" alt="web" />
                    <div className="carousel-caption d-md-block">
                        <h1>Find Your Dreams Here</h1>
                        {/* <p><SearchBar /></p> */}
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={web1} class="d-block w-100" alt="web1" />
                    <div className="carousel-caption d-md-block">
                        <h1>Over 25000 College and Achive </h1>
                        {/* <p><SearchBar /></p> */}
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={web2} class="d-block w-100" alt="web2" />
                    <div class="carousel-caption d-md-block">
                        <h1>Your Goal What You Wanted To Be</h1>
                        {/* <p><SearchBar /></p> */}
                    </div>
                    </div>
                </div>
        </div>
        
        </>
    );

};

export default Carousel;