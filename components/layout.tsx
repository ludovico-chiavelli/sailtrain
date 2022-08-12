import React, { createContext, useContext, useState, useEffect } from 'react';
import type { FC, PropsWithChildren } from 'react';

import { MarkGithubIcon, ArchiveIcon } from '@primer/octicons-react';

import Header from './header';
import Footer from './footer';
import LogoNav from './logo-nav';

const Context = createContext<boolean>(false);

const Layout:FC<PropsWithChildren> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const Icons = {
    MarkGithubIcon: MarkGithubIcon,
    ArchiveIcon: ArchiveIcon
  }

  useEffect(() => {
    updatePredicate();
    window.addEventListener("resize", updatePredicate)

    return () => {
      window.removeEventListener("resize", updatePredicate)
    }
  })

  const updatePredicate = () => {
    //Determine if mobile
    setIsMobile(window.innerWidth < 768);
  }

  if (isMobile) {
    return (
      <Context.Provider value={isMobile}>
        <div className='h-screen w-screen flex flex-col'>
          <Header>
            <LogoNav Icons={Icons} />
          </Header>
          <main className='grow flex justify-center min-h-[400px]'>
            <section className='relative mt-16 w-full'>
              <div className='absolute inset-x-8'>
                {children}
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </Context.Provider>
    )
    
  } else {
    return (
      <Context.Provider value={ isMobile }>
        <div className='h-screen w-screen flex flex-col'>
          <Header>
            {null}
          </Header>
          <main className='relative min-h-[400px]'>
            <LogoNav Icons={Icons}/>
            <section className='md:left-56 lg:left-72 relative mt-16 w-4/6'>
              <div className='absolute inset-x-8'>
                {children}
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </Context.Provider>
    )
  }
}

export default Layout;

export function useThemeContext() {
  return useContext(Context);
}