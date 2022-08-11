import React from 'react';
import type { FC } from 'react';

import { useThemeContext } from './layout';

const LogoNav:FC = () => {
  const isMobile = useThemeContext();

  if (isMobile) {  
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
  } else {
    return (
      <div className='absolute -top-14 md:left-20 lg:left-36'>
          <div className='rounded-full h-[512px] w-32 bg-slate-500 relative'>
            <div className='absolute top-3 inset-x-0'>
              <div className='flex justify-center'>
                <div className='rounded-full h-28 w-28 bg-slate-700'></div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default LogoNav