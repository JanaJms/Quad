import React from 'react';
import CheckCircle from "../../assets/CheckCircle.png";
import line from "../../assets/Vector 4.png";
import ButtonCTA from '../ButtonCTA';

const Section6 = () => {
  return (
    <div className="p-8 md:p-16 lg:p-24 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
      {/* Left Side: Title and Dropdown */}
      <div className="md:w-1/2 text-5xl font-bold font-title_font text-black">
        <h2 className="leading-tight">
          Why You Should <br /> Work With 
          <span className="text-accent ml-2  sm:hidden">SCALE</span>
        </h2>
        <img src={line} alt="Line" className="w-full hidden sm:block mt-4" />
        <ButtonCTA className="w-1/2 h-14 hidden sm:block mt-4">
          What’s Your Industry?
        </ButtonCTA>
      </div>

      {/* Right Side: List of Benefits */}
      <div className="md:w-1/2 space-y-8 flex flex-col justify-between">
        <h2 className="text-5xl md:text-7xl font-title_font font-thin text-accent hidden sm:block ">99UIDESIGNS</h2>
        <ul className="space-y-6 text-2xl font-text_font md:pl-20 md:pt-20 mt-auto">
          {['Deep Consumer Learning And AI Technology', 'Buy The Leads You Want', 'No Hidden Fees, Straightforward Pricing', 'Full Funnel Development To Improve On Quality'].map((text, index) => (
            <li key={index} className="flex items-center">
              <img src={CheckCircle} alt="CheckCircle" className="w-6 h-6 mr-6" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Section6;
