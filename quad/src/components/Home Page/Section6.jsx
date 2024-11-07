import React from 'react';
import CheckCircle from "../../assets/CheckCircle.png";
import line from "../../assets/Vector 4.png";
import ButtonCTA from '../ButtonCTA';

const Section6 = () => {
  return (
    <div className="p-8 md:p-16 lg:p-24 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
      {/* Left Side: Title and Dropdown */}
      <div className="md:w-1/2 text-3xl md:text-5xl font-bold font-title_font text-black">
        <h2 className="leading-tight">
            Get Started 
          <span className="text-accent ml-2 ">Today</span>
          !
        </h2>
        <img src={line} alt="Line" className="w-full hidden sm:block mt-4" />

      </div>

      {/* Right Side: List of Benefits */}
      <div className="md:w-1/2 space-y-8 flex flex-col justify-between">
        <h2 className="text-5xl font-title_font font-thin text-accent hidden sm:block ">Ready to take your media presence to the next level?</h2>
        <p className=" text-primary text-base">
      Contact us today to schedule a consultation or request a quote.<br/>
       </p>
       <ButtonCTA className=" md:w-2/3 mt-4">
            Let’s create something extraordinary together!
        </ButtonCTA>
      </div>
    </div>
  );
};

export default Section6;
