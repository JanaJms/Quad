import React from 'react';
import IconContentEngage from '../../assets/photo10.png';
import IconPreQualification from '../../assets/photo11.png';
import IconConvertingLead from '../../assets/photo12.png';
import IconTracingReporting from '../../assets/photo13.png';

const Section5 = () => {
  const steps = [
    {
      icon: IconContentEngage,
      stepNumber: '01',
      title: 'CONTENT & ENGAGE',
      description:
        'We use our years of experience to create content that customers get excited about, engaging with clear and enticing messaging.',
    },
    {
      icon: IconPreQualification,
      stepNumber: '02',
      title: 'PRE-QUALIFICATION',
      description:
        'Using data-driven marketing models, we help businesses experience customer growth.',
    },
    {
      icon: IconConvertingLead,
      stepNumber: '03',
      title: 'CONVERTING LEAD',
      description:
        'After pre-qualification, we allow you to purchase the lead after due diligence to ensure they are high-intent.',
    },
    {
      icon: IconTracingReporting,
      stepNumber: '04',
      title: 'TRACING & REPORTING',
      description:
        'We give you the tools and reporting to best understand how your leads convert.',
    },
  ];

  return (
    <div className="p-8 md:p-16 lg:p-24 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
      {/* Left Section: Title, Text, and Button */}
      <div className="md:w-1/2 space-y-6 ">
        <h1 className="text-6xl font-bold font-title_font text-black">The Scale <br/> <span className=" text-accent">Process </span></h1>
        <p className="text-lg font-text_font pt-24 leading-relaxed max-w-lg hidden sm:block">
          Using data-driven marketing models we help businesses experience customer growth.
          Any business owner that is looking to increase their online sales or bring in more leads
          for their business.
        </p>
        <button className="px-8 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 hidden sm:block">
          Let's Talk
        </button>
      </div>

      {/* Right Section: Steps */}
      <div className="md:w-1/2 space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4 md:space-x-6">
            <img src={step.icon} alt={`Icon for ${step.title}`} className="w-8 h-8 md:w-12 md:h-12" />
            <div>
              <h3 className="text-lg md:text-3xl font-medium font-header_font text-black">{step.stepNumber}. {step.title}</h3>
              <p className="text-base font-text_font mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
