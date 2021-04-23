import clsx from 'clsx'
import React from 'react'
import { Props } from 'interfaces'

export const Container = ({ className, children, ...others }: Props) => {
  return (
    <main className="min-w-full min-h-screen py-10 bg-gradient-to-b from-primary to-purple-700">
      <div
        className={clsx('container max-w-3xl mx-auto px-5', className)}
        {...others}
      >
        {children}
      </div>
    </main>
  )
}
