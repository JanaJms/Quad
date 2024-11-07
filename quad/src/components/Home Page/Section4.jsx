import React from 'react';
import IconExperience from '../../assets/photo6.png';
import IconWebsites from '../../assets/photo7.png';
import IconBudget from '../../assets/photo8.png';
import IconApplications from '../../assets/photo9.png';

const Section4 = () => {

  return (
    <div className="p-8 md:p-16 lg:p-24 hidden sm:block">
      <p className="text-center text-base md:text-2xl text-primary font-medium mb-8 leading-relaxed p-8">
      Join our growing list of <span className="font-bold">satisfied clients</span> who have transformed their digital presence and achieved remarkable results. <br/>
      Our work speaks for itself — check out our portfolio to see how we’ve helped brands like yours shine online.
      </p>
      <div className="
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:py-16 rounded-lg 
      items-left text-left shadow-lg border md:divide-x md:divide-gray-200">

      </div>
    </div>
  );
};

export default Section4;
