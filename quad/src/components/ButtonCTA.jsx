import React from 'react'

function ButtonCTA({ children, className = '', ...props }) {
  return (
    <button
    className={`px-8 py-3 mt-4 text-secondary border border-lightSecondary rounded-md shadow-md
                            hover:text-white hover:bg-secondary focus:ring-4 transition-all
                            text-smalltext_size font-medium duration-300 ease-in-out
    ${className}`}
    {...props}
    >
      {children}
    </button>
  )
}

export default ButtonCTA