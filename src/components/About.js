import React from "react";
import Common from "./Common";
import web from "../images/images.jpg";

const About = () => {
    
        return (
            <>
            <Common title="Welcome to the Contact" 
            imgsrc={web}
            visit="/contact"
            btnname="Contact Us"
            />
          </>

        );
};

export default About;