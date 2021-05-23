import React, { forwardRef } from 'react'
import { ButtonProps } from 'interfaces'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={
          'bg-gradient-to-r from-primary to-purple-700 text-white uppercase py-3 inline-flex px-8 rounded-full font-bold tracking-wider items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200 focus:outline-none cursor-pointer ' +
          className
        }
      >
        {children}
      </button>
    )
  }
)

export default Button
