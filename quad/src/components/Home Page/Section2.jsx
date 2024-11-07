import React from 'react';
import IconImage from '../../assets/photo2.png';

const Section2 = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-8 md:p-16 lg:p-24 space-y-8 md:space-y-0">
      
      {/* Left Side - Icon and Title */}
      <div className="flex flex-col md:items-center md:text-center space-y-6 md:space-y-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-title_font leading-tight">Who We Are?</h2>
        <img src={IconImage} alt="Icon" className="w-40 h-40 hidden md:block" />
      </div>

      {/* Right Side - Text Content */}
      <div className="md:w-1/2 text-primary text-base leading-relaxed">
        <p>
        We specialize in crafting compelling digital experiences that drive engagement and grow your brand.
        </p>
        <p className="mt-7">
        From website design to social media content creation, our team of experts is dedicated to helping you succeed in the digital landscape.
        </p>
      </div>
    </div>
  );
};

export default Section2;
