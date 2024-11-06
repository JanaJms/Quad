import React from 'react';

const BookCall = () => {
  return (
    <div className="md:p-16 ">
        <div className="bg-lightPrimary p-10 md:p-16 md:rounded-3xl flex flex-col md:flex-row md:space-x-40 text-white">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-6xl font-bold leading-tight">
          Let’s bring success to your business
        </h2>
        <p className="text-lightSecondary pt-20">
          Using data-driven marketing models we help <br /> businesses experience customer growth.
        </p>
      </div>

      {/* Right Side: Form */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <form className="space-y-8">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 bg-transparent text-white placeholder-gray-400 border-b-2 border-gray-500 focus:outline-none focus:border-accent"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 bg-transparent text-white placeholder-gray-400 border-b-2 border-gray-500 focus:outline-none focus:border-accent"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-transparent text-white placeholder-gray-400 border-b-2 border-gray-500 focus:outline-none focus:border-accent"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full p-3 bg-transparent text-white placeholder-gray-400 border-b-2 border-gray-500 focus:outline-none focus:border-accent"
          />
          <button
            type="submit"
            className="w-full p-3 rounded-xl bg-accent text-white font-bold hover:bg-orange-800 focus:outline-none"
          >
            Book A Strategy Call
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default BookCall;
