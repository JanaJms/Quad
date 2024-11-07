import React from 'react';

const BookCall = () => {
  return (
    <div className="md:p-16 ">
        <div className="bg-lightPrimary p-10 md:p-16 md:rounded-3xl flex flex-col md:flex-row md:space-x-40 text-white">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <h2 className="text-6xl font-bold leading-tight">
        Contact Us
        </h2>
        
      </div>

      {/* Right Side*/}
        <div className="md:w-1/2 flex flex-col justify-between space-y-12"> 
        <p className="text-white pt-10">
        For inquiries, reach us at [contact information].
        </p>
        <p className="text-white">
        Follow us on social media for tips, updates, and insights into the world of media services
        </p>        
            {/* Center the icons */}
            <div className="flex flex-col justify-between items-center space-y-6">
            <div className="flex justify-center space-x-4">
            {/* Replace these with actual icons */}
            <span className="text-2xl">FB</span>
            <span className="text-2xl">IG</span>
            <span className="text-2xl">TW</span>
            <span className="text-2xl">LN</span>
            </div>
            <button className="py-3 px-20 rounded-xl bg-accent text-white font-bold hover:bg-orange-800 focus:outline-none">
            Book A Strategy Call
            </button>
            </div>
        </div>
        
        </div>

    </div>
  );
};

export default BookCall;
