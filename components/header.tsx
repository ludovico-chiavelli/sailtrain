import React from 'react'

const Header = ({ children }: { children: React.ReactNode | null }) => {
  return (
    <header className='flex-initial relative'>
      <div className='bg-gradient-to-r from-bRed to-bGreen h-44 w-full'></div>
      { children }
    </header>
  )
}

export default Header