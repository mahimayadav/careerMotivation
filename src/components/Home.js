import React from "react";
import Common from "./Common";
import Carousel from "./Carousel";
import Service from "./AllHomeLists/Services";
import About from "./About";
import Review from "./Review";
import FirstList from "./AllHomeLists/FirstList";
import CoursesLink from "./CoursesLink";
import web from "../images/image.jpg";
import web1 from "../images/image1.jpg";
import web2 from "../images/image2.jpg";


const Home = (props) => {
    
        return (
          <>
           <Carousel title="Find Your Dreams Here"
           title1="Over 25000 College and Achive"
           title2="Your Goal What You Wanted To Be"
           img={web}
           img1={web1}
           img2={web2}
           />
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
            <section className="main-heading bg-dark my-5 py-5">
              <div className="text-center">
                <h1 className="display-4">All India Top Courses</h1>
                <hr className="w-25 mx-auto" />
              </div>  
              <div className="row mx-5">
                <div className="col-10 mx-auto ">
                  <div className="row">
                    <div className="col-md-10 my-5">
                      <CoursesLink />
                    </div>
                  </div>
                </div>
              </div>
           </section>

          </>

        );
};

export default Home;