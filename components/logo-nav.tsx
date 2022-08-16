import React from 'react'
import Image from 'next/image'
import type { Icon } from '@primer/octicons-react'

import { useThemeContext } from './layout'
import Link from 'next/link'

const LogoNav = ({ Icons }: { Icons: { MarkGithubIcon: Icon, ArchiveIcon: Icon}}) => {
  const isMobile = useThemeContext()

  if (isMobile) {  
    return (
      <div className='absolute -bottom-8 inset-x-0 drop-shadow-md sm:scale-150'>
        <div className='flex justify-center'>
          <div className='rounded-full h-16 w-72 bg-bBeige relative'>
            <div className='absolute top-2 left-8'>
              <div className='flex flex-col items-center h-10'>
                <Icons.MarkGithubIcon size={22}/>
                <div>GitHub</div>
              </div>
            </div>
            <div className='absolute -top-10 inset-x-0'>
              <div className='flex justify-center'>
                <div className='rounded-full h-24 w-24 overflow-hidden'>
                  <Image src={'/pfp.png'} alt='Profile Picture' width={540} height={540} objectFit='cover'/>
                </div>
              </div>
            </div>
            <div className='absolute top-3 right-8'>
              <Link href='/projects'>
                <a className='flex flex-col items-center h-10'>
                  <Icons.ArchiveIcon size={22}/>
                  <div>Projects</div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='absolute -top-4 md:left-20 lg:left-36 drop-shadow-md scale-125'>
        <div className='rounded-full h-[384px] w-32 bg-bBeige relative'>
          <div className='absolute top-3 inset-x-0'>
            <div className='flex justify-center'>
              <div className='rounded-full h-28 w-28 overflow-hidden'>
                <Image src={'/pfp.png'} alt='Profile Picture' width={540} height={540} objectFit='cover'/>
              </div>
            </div>
          </div>
          <div className='h-1/2 absolute top-36 w-full'>
            <div className='h-full flex flex-col items-center justify-around'>
              <div className='flex flex-col items-center h-10'>
                <Icons.MarkGithubIcon size={30}/>
                <div>GitHub</div>
              </div>
              <Link href='/projects'>
                <a className='flex flex-col items-center h-10'>
                  <Icons.ArchiveIcon size={30}/>
                  <div>Projects</div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LogoNav