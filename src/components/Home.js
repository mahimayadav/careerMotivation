import React from "react";
import Common from "./Common";
import web from "../images/image.jpg";
import Carousel from "./Carousel";
import Service from "./Services";

const Home = () => {
    
        return (
          <>
            <Carousel />   
            <Common title="Welcome To Grow your career With" 
            imgsrc={web}
            visit="/service"
            btnname="Get Started"
            />
            <Service />
          </>

        );
};

export default Home;