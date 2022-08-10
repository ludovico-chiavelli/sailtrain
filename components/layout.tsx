import React from 'react';
import type { FC, PropsWithChildren } from 'react';

import Header from './header';
import Footer from './footer';

const Layout:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='h-screen w-screen flex flex-col'>
      <Header />
      <main className='flex-1 flex justify-center'>
        <section className='relative mt-16 w-full'>
          <div className='absolute inset-x-8'>
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Layout;