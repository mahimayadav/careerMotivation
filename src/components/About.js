import React from "react";
import Common from "./Common";
import web from "../images/software.jpg";

const About = () => {
    
        return (
            <>
            <Common title="Welcome to the Contact" 
            imgsrc={web}
            visit="/engineering"
            btnname="Check Us"
            />
          </>

        );
};

export default About;