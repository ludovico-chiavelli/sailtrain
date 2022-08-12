import React from 'react'

const Header = ({ children }: { children: React.ReactNode | null }) => {
  return (
    <header className='flex-initial relative'>
      <div className='bg-gradient-to-r from-slate-800 to-slate-400 h-44 w-full'></div>
      { children }
    </header>
  )
}

export default Header