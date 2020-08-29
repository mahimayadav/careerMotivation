import React from "react";
import Common from "./Common";
import web from "../images/image.jpg";
import Carousel from "./Carousel";
import Service from "./Services";
import About from "./About";
import Review from "./Review";

const Home = () => {
    
        return (
          <>
           <Carousel />
            <Common title="Welcome To Grow your career With" 
            imgsrc={web}
            visit="/engineering"
            btnname="Get Started"
            heading="EXPLORE ALMOST EVERYTHING"
            details="we are here to help you to grow your career to find your beautifull destination."
            />
            <section className="main-heading my-5 bg-light py-5">
                <div className="text-center">
                  <h1 className="display-4">Choose Your Future</h1>
                  <hr className="w-25 mx-auto" />
                </div>
                <Service />
            </section>

                <About />
            <section className="main-heading bg-light my-5 py-5">
              <div className="text-center">
                <h1 className="display-4">What our learners say about Plus</h1>
                <hr className="w-25 mx-auto" />
              </div>      
            <Review />
            </section>

          </>

        );
};

export default Home;