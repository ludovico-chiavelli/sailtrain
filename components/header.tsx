import React from 'react';
import type { FC } from 'react';

import LogoNav from './logo-nav';

const Header:FC = () => {
  return (
    <header className='flex-initial relative'>
      <div className='bg-gradient-to-r from-slate-800 to-slate-400 h-44 w-full'></div>
      <LogoNav/>
    </header>
  )
}

export default Header;