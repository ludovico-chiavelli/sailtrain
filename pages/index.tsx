import React from 'react'
import Head from 'next/head'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

import Layout from '../components/layout'

const Page: NextPageWithLayout = () => {
  return (
    <div className='text-white'>
      <h1 className='text-5xl font-bold'>Welcome to my personal website!</h1>
      <p className='text-2xl leading-snug mt-8'>
        Hello 👋! I&apos;m a web developer. I like to tinker with web technologies and try creating something that is hopefully useful to somebody other than just myself 😅.
      </p>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <div className='h-full'>
      <Head>
        <title>SailTrain</title>
      </Head>
      <Layout>
        {page}
      </Layout>
    </div>
  )
}

export default Page