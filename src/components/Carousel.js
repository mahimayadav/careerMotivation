import React from "react";
import SearchBar from "./SearchBar";

const Carousel = (props) => {
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
                    <img src={props.img} class="d-block w-100" alt="web" />
                    <div className="carousel-caption d-md-block">
                        <h1>{props.title}</h1>
                        {/* <p><SearchBar /></p> */}
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={props.img1} class="d-block w-100" alt="web1" />
                    <div className="carousel-caption d-md-block">
                        <h1>{props.title1}</h1>
                        {/* <p><SearchBar /></p> */}
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={props.img2} class="d-block w-100" alt="web2" />
                    <div class="carousel-caption d-md-block">
                        <h1>{props.title2}</h1>
                        {/* <p><SearchBar /></p> */}
                    </div>
                    </div>
                </div>
        </div>
        
        </>
    );

};

export default Carousel;