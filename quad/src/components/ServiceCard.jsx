import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-left text-left p-12 space-y-12 shadow-lg">
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-3xl font-header_font font-medium">{title}</h3>
      <p>{description}</p>
      <button className=" text-accent text-left hover:text-lightSecondary underline">
        Book a Strategy Call
      </button>
    </div>
  );
};

export default ServiceCard;
