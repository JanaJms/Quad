import React from 'react';
import IconExperience from '../../assets/photo6.png'; // Replace with your actual icons
import IconWebsites from '../../assets/photo7.png';
import IconBudget from '../../assets/photo8.png';
import IconApplications from '../../assets/photo9.png';

const Section4 = () => {
  const stats = [
    {
      icon: IconExperience,
      title: '15 YEARS',
      description: 'of Lead Gen Experience',
    },
    {
      icon: IconWebsites,
      title: '500+',
      description: 'Business Websites Generating Leads',
    },
    {
      icon: IconBudget,
      title: '30 MILLION',
      description: 'Advertising Budget',
    },
    {
      icon: IconApplications,
      title: '9 MILLION',
      description: 'Online Applications Since 2022',
    },
  ];

  return (
    <div className="p-8 md:p-16 lg:p-24 hidden sm:block">
      <p className="text-center text-base md:text-2xl text-primary font-medium mb-8 leading-relaxed p-8">
        Our <span className="font-bold">combined 60+ years</span> in specialized digital marketing areas allows us to focus on quality.
        That means we deliver leads directly to your business that are ready to convert.
      </p>
      <div className="
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:py-16 rounded-lg 
      items-left text-left shadow-lg border md:divide-x md:divide-gray-200">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col space-y-3 px-6">
            <img src={stat.icon} alt="Stat Icon" className="w-10 h-10 mb-8 md:w-14 md:h-14" />
            <h3 className="text-xl md:text-5xl font-medium font-header_font text-accent">{stat.title}</h3>
            <p className="text-sm md:text-base leading-tight">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
