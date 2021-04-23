import React from 'react'
import { Props } from 'interfaces'

const Button = ({ children = 'button', className = '', ...others }: Props) => {
  return (
    <button
      className={
        'bg-gradient-to-r from-primary to-purple-700 text-white uppercase py-3 inline-flex px-8 rounded-full font-bold tracking-wider items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200 focus:outline-none ' +
        className
      }
      {...others}
    >
      {children}
    </button>
  )
}

export default Button
