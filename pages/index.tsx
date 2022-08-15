import React from 'react'
import Head from 'next/head'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

import Layout from '../components/layout'

const Page: NextPageWithLayout = () => {
  return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel, alias velit numquam inventore ipsum eaque tempora perferendis unde nesciunt adipisci officia quisquam tenetur eius nisi quos accusantium reprehenderit nobis ad itaque minima fuga quia! Quas adipisci saepe earum tempore praesentium facilis corrupti aut. Omnis obcaecati quia qui modi quam cupiditate eaque et, alias iste ratione suscipit dignissimos nulla tempora, in explicabo expedita sunt aliquam magni id aspernatur dolor aut!</p>
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