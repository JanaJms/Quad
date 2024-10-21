import React from 'react'

function ButtonLetsTalk({ children, className = '', ...props }) {
  return (
    <button
    className={`font-text_font text-base font-semibold leading-none text-center w-60 h-14 text-white bg-lightPrimary
    px-4 py-2 rounded-2xl hover:bg-secondary transition-all duration-300 ease-in-out
    ${className}`}
    {...props}
    >
      {children}
    </button>
  )
}

export default ButtonLetsTalk