import React from 'react';
import Phone from "../../assets/photo1.png";
import CheckCircle from "../../assets/CheckCircle.png";
import CaretDown from "../../assets/CaretDown.png";
import ButtonCTA from '../ButtonCTA';

const Section1 = () => {
  return (
    <div
      className="flex flex-col-reverse lg:flex-row items-center justify-between h-screen p-8 md:p-16 lg:p-24"
      style={{
        backgroundImage: `url(${Phone})`,
        backgroundSize: window.innerWidth < 768 ? 'contain' : 'contain', // cover on small screens
        backgroundPosition: window.innerWidth < 768 ? 'top' : 'right', // top on small screens
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6 lg:space-y-8 p-6 rounded-lg">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-title_font leading-tight">
           <span className="text-accent">Elevate</span> Your Brand with our <span className="text-accent">Media Services</span>
        </h1>
        
        <ul className="space-y-3 text-secondary text-base md:text-lg">
          {['Boosted Engagement', 'Quality Leads That Convert', 'Increased ROI and Revenue Growth'].map((text, index) => (
            <li key={index} className="flex items-center">
              <img src={CheckCircle} alt="CheckCircle" className="w-5 h-5 mr-2" />
              {text}
            </li>
          ))}
        </ul>
        
        <ButtonCTA className="">
          Discover Our Services
        </ButtonCTA>
      </div>
    </div>
  );
};

export default Section1;
