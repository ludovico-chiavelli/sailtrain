import React from 'react'
import type { FC } from 'react'

const Footer:FC = () => {
  return (
    <footer className='basis-28 flex flex-col justify-end py-6 md:py-10'>
      <div className='flex justify-center items-center'>
        <h1 className='text-2xl'>Made with 🍕 by SailTrain</h1>
      </div>
    </footer>
  )
}

export default Footer