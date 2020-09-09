import React from "react";
import Common from "./Common";
import Carousel from "./Carousel";
import Service from "./AllHomeLists/Services";
import About from "./About";
import Review from "./Review";
import FirstList from "./AllHomeLists/FirstList";
import CoursesLink from "./CoursesLink";


const Home = (props) => {
    
        return (
          <>
           <Carousel />
           <div className="container-fluid">
                    <div className='row'>
           <div className="text-center my-5">
                  <h1 className="display-5">EXPLORE ALMOST EVERYTHING</h1>
                  <hr className="w-25 mx-auto" />
                </div>
            </div>
          </div>
          <FirstList />
            <Common title="Welcome To Grow your career With" 
            url="https://www.youtube.com/watch?v=WmTb7Izi0n0"
            visit="/engineering"
            btnname="Get Started"
            heading="How to achive My Goals "
            details="We are here to help you to grow your career to find your beautifull destination. we will show you how to achive goal step by step."
            />
            <section className="main-heading my-10 bg-light py-5">
                <div className="text-center">
                  <h1 className="display-4">Choose Your Future</h1>
                  <hr className="w-25 mx-auto" />
                </div>
                <Service />
            </section>
                <About />
            <section className="main-heading bg-light my-5 py-5">
              <div className="text-center">
                <h1 className="display-4">What Our Learners Say About Carvations</h1>
                <hr className="w-25 mx-auto" />
              </div>      
            <Review />
            
            </section>
            <section className="main-heading my-5 py-5">
              <div className="text-center">
                <h1 className="display-4">All India Top Courses</h1>
                <hr className="w-25 mx-auto" />
              </div>  
              <div className="bg-dark">
                <div className="row">
                <div className="col-10 mx-auto ">
                  <div className="row">
                    <div className="col-md-10 my-3 mx-5 ml-10">
                    <CoursesLink />
                        
                  </div>
                  </div>
                  </div>

                </div>
              </div>    
           
            
            </section>

          </>

        );
};

export default Home;