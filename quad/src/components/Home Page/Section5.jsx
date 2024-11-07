import React from 'react';
import IconContentEngage from '../../assets/photo10.png';
import IconPreQualification from '../../assets/photo11.png';
import IconConvertingLead from '../../assets/photo12.png';
import IconTracingReporting from '../../assets/photo13.png';
import IconExperience from '../../assets/photo6.png';
import IconWebsites from '../../assets/photo7.png';
import IconBudget from '../../assets/photo8.png';
import IconApplications from '../../assets/photo9.png';
import ButtonLetsTalk from '../ButtonLetsTalk';

const Section5 = () => {
  const reasons = [
    {
      icon: IconExperience,
      reasonNumber: '01',
      title: 'Tailored Solutions',
      description: 'We understand that every brand is unique. Our services are customized to meet your specific needs and goals.',
    },
    {
      icon: IconWebsites,
      reasonNumber: '02',
      title: 'Expert Team',
      description: 'Our diverse team of professionals brings a wealth of experience across various industries, ensuring you receive the best strategies and insights.',
    },
    {
      icon: IconBudget,
      reasonNumber: '03',
      title: 'Results-Driven Approach',
      description: 'We focus on measurable outcomes. Our analytics-driven strategies help you track progress and optimize your efforts for maximum impact.',
    },
    {
      icon: IconApplications,
      reasonNumber: '04',
      title: 'Collaborative Partnership',
      description: 'We work closely with you to understand your vision and bring it to life, ensuring your goals are at the forefront of every project.',
    },
  ];

  return (
    <div className="p-8 md:p-16 lg:p-24 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
      {/* Left Section: Title, Text, and Button */}
      <div className="md:w-1/2 space-y-6 ">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-title_font leading-tight">Why Choose Us?</h1>
        <ButtonLetsTalk className="px-8 py-3 rounded-full shadow-md hidden sm:block">Let's Talk</ButtonLetsTalk>
      </div>

      {/* Right Section: reasons */}
      <div className="md:w-1/2 space-y-8">
        {reasons.map((reason, index) => (
          <div key={index} className="flex items-start space-x-4 md:space-x-6">
            <img src={reason.icon} alt={`Icon for ${reason.title}`} className="w-10 h-10 md:w-16 md:h-16" />
            <div>
              <h3 className="text-2xl md:text-3xl font-medium font-header_font text-accent">{reason.reasonNumber}. {reason.title}</h3>
              <p className="text-base font-text_font mt-2">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
