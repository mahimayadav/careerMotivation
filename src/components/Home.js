import React from "react";
import Common from "./Common";
import web from "../images/images.jpg";

const Home = () => {
    
        return (
          <>
            <Common title="Welcome To Grow your career With" 
            imgsrc={web}
            visit="/service"
            btnname="Get Started"
            />
          </>

        );
};

export default Home;