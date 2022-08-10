import React from 'react';
import type { FC } from 'react';

const LogoNav:FC = () => {
  return (
    <div className='absolute -bottom-8 inset-x-0'>
      <div className='flex justify-center'>
        <div className='rounded-full h-16 w-72 bg-slate-500 relative'>
          <div className='absolute -top-10 inset-x-0'>
            <div className='flex justify-center'>
              <div className='rounded-full h-24 w-24 bg-slate-700'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoNav