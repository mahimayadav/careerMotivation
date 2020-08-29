import React from "react";
import Common from "./Common";
import web from "../images/image2.jpg";

const About = () => {
    
        return (
            <>  
            <Common title="Learn From the Legends With" 
            imgsrc={web}
            visit="/service"
            btnname="Check Us"
            heading="About Us"
            details="Watch lessons from the best as they share their stories, shortcuts, failures, and successes."
            />
          </>

        );
};

export default About;