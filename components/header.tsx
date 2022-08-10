import React from 'react';
import type { FC } from 'react';

const Header:FC = () => {
  return (
    <header>
      <div className='absolute top-0 left-0 bg-gradient-to-r from-slate-800 to-slate-400 h-44 w-full'></div>
    </header>
  )
}

export default Header;