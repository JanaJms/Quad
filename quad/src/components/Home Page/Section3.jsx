import React from 'react';
import ServiceCard from '../ServiceCard';
import EcommerceIcon from '../../assets/photo3.png';
import HomeServicesIcon from '../../assets/photo4.png';
import HealthCareIcon from '../../assets/photo5.png';

const Section3 = () => {
    const services = [
        {
            icon: EcommerceIcon,
            title: 'E-COMMERCE',
            description: 'Using data-driven marketing models we help businesses experience customer growth.',
        },
        {
            icon: HomeServicesIcon,
            title: 'HOME SERVICES',
            description: 'Using data-driven marketing models we help businesses experience customer growth.',
        },
        {
            icon: HealthCareIcon,
            title: 'HEALTH CARE',
            description: 'Using data-driven marketing models we help businesses experience customer growth.',
        },
        // Add more services here
    ];

    return (
        <div className="p-8 md:p-16 lg:p-24">

            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">

                {/* Left Side - Title */}
                <h2 className=" md:w-1/2 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-accent">Services</span> for Business Owners
                </h2>

                {/* Right Side - Text Content */}
                <p className="md:w-1/2 text-primary text-base leading-relaxed">
                    Our <b>combined 60+ years</b> in specialized digital marketing areas allows us to focus on quality. That means we deliver leads directly to your business that are ready to convert.
                </p>
            </div>

            <div className="grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
    );
};

export default Section3;
