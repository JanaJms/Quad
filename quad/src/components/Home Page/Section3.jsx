import React from 'react';
import ServiceCard from '../ServiceCard';
import EcommerceIcon from '../../assets/photo3.png';
import HomeServicesIcon from '../../assets/photo4.png';
import HealthCareIcon from '../../assets/photo5.png';

const Section3 = () => {
    const services = [
        {
            icon: EcommerceIcon,
            title: 'Website Development',
            description: 'Create stunning, user-friendly websites that reflect your brand identity. Our responsive designs ensure your site looks great on any device.',
        },
        {
            icon: HomeServicesIcon,
            title: 'Social Media Management',
            description: 'Build your online presence with tailored content strategies. We create and manage engaging posts that resonate with your audience and boost your brand visibility.',
        },
        {
            icon: HealthCareIcon,
            title: 'Content Creation',
            description: 'Whether it\'s blog posts, articles, or multimedia content, our skilled writers and designers produce high-quality materials that captivate and inform.',
        },
        {
            icon: HealthCareIcon,
            title: 'Brand Strategy',
            description: 'Define your brand\'s voice and vision with our comprehensive branding services. We help you craft a cohesive strategy that sets you apart from the competition.',
        },
        {
            icon: HealthCareIcon,
            title: 'Digital Marketing',
            description: 'Enhance your online reach with our targeted marketing campaigns. From SEO to email marketing, we tailor solutions to drive traffic and conversions.',
        },
        // Add more services here
    ];

    return (
        <div className="p-8 md:p-16 lg:p-24">

            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">

                {/* Left Side - Title */}
                <h2 className=" md:w-1/2 text-3xl md:text-5xl lg:text-6xl font-extrabold font-title_font leading-tight">
                <span className="text-accent">Services</span> for Business Owners
                </h2>

                {/* Right Side - Text Content */}
                <p className="md:w-1/2 text-primary text-base leading-relaxed">
                    With <b>years of expertise</b> in digital media, we craft personalized strategies that drive engagement and deliver high-quality leads, ready to boost your brand's growth and success.
                </p>
            </div>

            <div className="grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
