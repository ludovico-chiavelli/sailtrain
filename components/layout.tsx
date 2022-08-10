import React from 'react';
import type { FC, PropsWithChildren } from 'react';

import Header from './header';

const Layout:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='h-screen w-screen'>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout;