import React from 'react';
import IconImage from '../../assets/photo2.png';

const Section2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 lg:p-24 space-y-8 md:space-y-0">
      
      {/* Left Side - Icon and Title */}
      <div className="flex flex-col items-center text-center space-y-6 md:space-y-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-title_font">Who We Are?</h2>
        <img src={IconImage} alt="Icon" className="w-40 h-40 hidden md:block" />
      </div>

      {/* Right Side - Text Content */}
      <div className="md:w-1/2 text-primary text-base leading-relaxed">
        <p>
          Our success as a team is built on a foundation of mutual care and growth. We understand that we are each integral parts of a larger whole, and that we can only thrive when we prioritize the well-being of the team as a whole.
        </p>
        <p className="mt-7">
          This means that we look out for each other, whether that means lending a helping hand, listening when someone needs to talk, or simply checking in regularly to see how we’re all doing.
        </p>
      </div>
    </div>
  );
};

export default Section2;
